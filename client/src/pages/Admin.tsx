import { useState, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExt from '@tiptap/extension-image';
import { Table, TableCell, TableHeader } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { supabase, type SupabasePost } from '@/lib/supabase';
import { nanoid } from 'nanoid';
import {
  Trash2, Edit3, Eye, EyeOff, LogOut, Save, ArrowLeft,
  Globe, FileText, CheckCircle, Clock,
  AlertCircle, Loader2, Image, Code2, Share2, Target, Upload, X,
  Bold, Italic, List, ListOrdered, Quote, Minus, Table2, Undo, Redo,
  Plus, Search,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type View = 'list' | 'editor';

type PostForm = {
  // Core
  slug: string; title: string; status: 'draft' | 'published'; published_at: string;
  category: string; tags_raw: string;
  // Hero Image
  featured_image: string; featured_image_alt: string;
  // Content
  excerpt: string; key_intelligence: string; content_html: string;
  // SEO Essentials
  focus_keyphrase: string; meta_title: string; meta_description: string;
  robots_index: boolean; robots_follow: boolean; canonical_url: string;
  // Schema
  schema_type: string; schema_custom: string;
  // Social — OG
  og_title: string; og_description: string; og_image: string; og_image_alt: string;
  // Social — Twitter
  twitter_card: string; twitter_title: string; twitter_description: string; twitter_image: string;
  // CTA
  cta_heading: string; cta_body: string; cta_label: string; cta_href: string;
  // Author
  author: string; author_image: string; related_slugs: string[];
};

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  'SEO Strategy', 'Medical SEO', 'Industrial SEO', 'Methodology',
  'Business Growth', 'GCC Markets', 'Technical SEO', 'Content Marketing',
];

const SCHEMA_TYPES = [
  { value: 'Article', label: 'Article — General blog/editorial' },
  { value: 'BlogPosting', label: 'BlogPosting — Blog post' },
  { value: 'HowTo', label: 'HowTo — Step-by-step guide' },
  { value: 'FAQPage', label: 'FAQPage — FAQ content' },
  { value: 'NewsArticle', label: 'NewsArticle — News piece' },
  { value: 'WebPage', label: 'WebPage — Generic page' },
];

const TWITTER_CARDS = [
  { value: 'summary_large_image', label: 'Summary with large image (recommended)' },
  { value: 'summary', label: 'Summary (small image)' },
];

const DEFAULT_FORM: PostForm = {
  slug: '', title: '', status: 'draft',
  published_at: new Date().toISOString().split('T')[0],
  category: 'SEO Strategy', tags_raw: '',
  featured_image: '', featured_image_alt: '',
  excerpt: '', key_intelligence: '', content_html: '',
  focus_keyphrase: '', meta_title: '', meta_description: '',
  robots_index: true, robots_follow: true, canonical_url: '',
  schema_type: 'BlogPosting', schema_custom: '',
  og_title: '', og_description: '', og_image: '', og_image_alt: '',
  twitter_card: 'summary_large_image', twitter_title: '', twitter_description: '', twitter_image: '',
  cta_heading: 'Ready to grow your business in the GCC?',
  cta_body: 'Book a free APEX Diagnostic with our consulting team and get a clear, actionable plan.',
  cta_label: 'Book Free Diagnostic', cta_href: '/contact',
  author: 'Sama Alaa',
  author_image: '/images/sam-hamouda-seo-consultant-dubai.webp',
  related_slugs: [],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function blocksToHtml(content: any[]): string {
  if (!Array.isArray(content) || content.length === 0) return '';
  return content.map(s => {
    const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    switch (s.type) {
      case 'h2': return `<h2>${esc(s.text || '')}</h2>`;
      case 'h3': return `<h3>${esc(s.text || '')}</h3>`;
      case 'p': return `<p>${esc(s.text || '')}</p>`;
      case 'ul': return `<ul>${(s.items || []).map((i: string) => `<li>${esc(i)}</li>`).join('')}</ul>`;
      case 'ol': return `<ol>${(s.items || []).map((i: string) => `<li>${esc(i)}</li>`).join('')}</ol>`;
      case 'blockquote': return `<blockquote><p>${esc(s.text || '')}</p></blockquote>`;
      default: return '';
    }
  }).join('');
}

function postToForm(p: SupabasePost): PostForm {
  return {
    slug: p.slug, title: p.title, status: p.status,
    published_at: p.published_at ? p.published_at.split('T')[0] : new Date().toISOString().split('T')[0],
    category: p.category || 'SEO Strategy',
    tags_raw: (p.tags || []).join(', '),
    featured_image: p.featured_image || '',
    featured_image_alt: p.featured_image_alt || '',
    excerpt: p.excerpt || '',
    key_intelligence: p.key_intelligence || '',
    content_html: p.content_html || blocksToHtml(p.content || []),
    focus_keyphrase: (p as any).focus_keyphrase || '',
    meta_title: p.meta_title || '',
    meta_description: p.meta_description || '',
    robots_index: (p as any).robots_index !== false,
    robots_follow: (p as any).robots_follow !== false,
    canonical_url: p.canonical_url || '',
    schema_type: (p as any).schema_type || 'BlogPosting',
    schema_custom: (p as any).schema_custom || '',
    og_title: p.og_title || '',
    og_description: p.og_description || '',
    og_image: p.og_image || '',
    og_image_alt: (p as any).og_image_alt || '',
    twitter_card: (p as any).twitter_card || 'summary_large_image',
    twitter_title: (p as any).twitter_title || '',
    twitter_description: (p as any).twitter_description || '',
    twitter_image: (p as any).twitter_image || '',
    cta_heading: p.cta_heading || '',
    cta_body: p.cta_body || '',
    cta_label: p.cta_label || 'Book Free Diagnostic',
    cta_href: p.cta_href || '/contact',
    author: p.author || 'Sama Alaa',
    author_image: p.author_image || '/images/sam-hamouda-seo-consultant-dubai.webp',
    related_slugs: p.related_slugs || [],
  };
}

function formToPayload(form: PostForm, id?: string) {
  const words = form.content_html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    ...(id ? { id } : {}),
    slug: form.slug, title: form.title, status: form.status,
    published_at: new Date(form.published_at).toISOString(),
    category: form.category,
    tags: form.tags_raw.split(',').map(t => t.trim()).filter(Boolean),
    featured_image: form.featured_image,
    featured_image_alt: form.featured_image_alt,
    excerpt: form.excerpt,
    key_intelligence: form.key_intelligence,
    content_html: form.content_html,
    focus_keyphrase: form.focus_keyphrase,
    meta_title: form.meta_title || form.title,
    meta_description: form.meta_description || form.excerpt,
    robots_index: form.robots_index,
    robots_follow: form.robots_follow,
    canonical_url: form.canonical_url,
    schema_type: form.schema_type,
    schema_custom: form.schema_custom,
    og_title: form.og_title || form.meta_title || form.title,
    og_description: form.og_description || form.meta_description || form.excerpt,
    og_image: form.og_image || form.featured_image,
    og_image_alt: form.og_image_alt || form.featured_image_alt,
    twitter_card: form.twitter_card,
    twitter_title: form.twitter_title || form.og_title || form.meta_title || form.title,
    twitter_description: form.twitter_description || form.og_description || form.meta_description || form.excerpt,
    twitter_image: form.twitter_image || form.og_image || form.featured_image,
    cta_heading: form.cta_heading, cta_body: form.cta_body,
    cta_label: form.cta_label, cta_href: form.cta_href,
    author: form.author, author_image: form.author_image,
    related_slugs: form.related_slugs,
    read_time: Math.max(1, Math.round(words / 200)),
    content: [],
  };
}

// ─── Shared UI ────────────────────────────────────────────────────────────────

const inputCls = 'w-full bg-[#0d1424] border border-[#1e2d4a] rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C] transition-colors';
const textareaCls = inputCls + ' resize-none';
const codeCls = 'w-full bg-[#050b14] border border-[#1e2d4a] rounded-lg px-4 py-3 text-[#C9A84C] text-xs font-mono placeholder-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none';

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
        {label} {required && <span className="text-[#C9A84C]">*</span>}
      </label>
      {hint && <p className="text-xs text-gray-500 mb-1.5">{hint}</p>}
      {children}
    </div>
  );
}

function CharCount({ value, max, ideal }: { value: string; max: number; ideal?: string }) {
  const n = value.length;
  const color = n > max ? 'text-red-400' : n > max * 0.9 ? 'text-yellow-400' : n === 0 ? 'text-gray-600' : 'text-green-400';
  return (
    <p className={`text-xs mt-1 ${color}`}>
      {n}/{max} chars{ideal && n === 0 ? ` · ideal: ${ideal}` : ''}
    </p>
  );
}

function Toggle({ label, hint, checked, onChange }: { label: string; hint?: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-4 cursor-pointer py-2">
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        {hint && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
      <button type="button" onClick={() => onChange(!checked)}
        className={`relative w-10 h-5 rounded-full transition-colors flex-shrink-0 ${checked ? 'bg-[#C9A84C]' : 'bg-[#1e2d4a]'}`}>
        <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? 'left-5.5 translate-x-0.5' : 'left-0.5'}`} />
      </button>
    </label>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#1e2d4a] pb-3 mb-5">
      <div className="w-7 h-7 bg-[#C9A84C]/15 rounded-lg flex items-center justify-center text-[#C9A84C] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-sm font-bold text-white">{title}</h2>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
}

// ─── Small upload-or-URL widget (for OG / Twitter fields) ────────────────────

function UploadOrUrl({ label, value, onChange, placeholder, hint }: {
  label: string; value: string; onChange: (url: string) => void;
  placeholder?: string; hint?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true); setErr('');
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filename = `${Date.now()}-${nanoid(8)}.${ext}`;
    const { data, error } = await supabase.storage.from('blog-images').upload(filename, file, { cacheControl: '3600', upsert: false });
    if (error) setErr(error.message);
    else {
      const { data: { publicUrl } } = supabase.storage.from('blog-images').getPublicUrl(data.path);
      onChange(publicUrl);
    }
    setUploading(false);
    e.target.value = '';
  }

  return (
    <Field label={label} hint={hint}>
      <div className="flex gap-2">
        <input type="text" value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder || 'Upload or paste URL'} className={inputCls + ' flex-1'} />
        <button onClick={() => ref.current?.click()} disabled={uploading}
          className="px-3 py-2 rounded-lg border border-[#1e2d4a] text-gray-400 hover:text-white hover:border-[#C9A84C]/50 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors disabled:opacity-40">
          {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
          Upload
        </button>
      </div>
      <input ref={ref} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      {value && <img src={value} alt="preview" className="mt-2 h-16 w-auto rounded-lg border border-[#1e2d4a] object-cover" onError={e => (e.currentTarget.style.display = 'none')} />}
      {err && <p className="text-red-400 text-xs mt-1">{err}</p>}
    </Field>
  );
}

// ─── Image Upload ─────────────────────────────────────────────────────────────

function ImageUpload({
  label, value, altValue, onUrlChange, onAltChange, hint, altHint,
}: {
  label: string; value: string; altValue: string;
  onUrlChange: (url: string) => void; onAltChange: (alt: string) => void;
  hint?: string; altHint?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file) return;
    setUploading(true);
    setUploadError('');
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filename = `${Date.now()}-${nanoid(8)}.${ext}`;
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(filename, file, { cacheControl: '3600', upsert: false });
    if (error) {
      setUploadError(error.message);
    } else {
      const { data: { publicUrl } } = supabase.storage.from('blog-images').getPublicUrl(data.path);
      onUrlChange(publicUrl);
    }
    setUploading(false);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = '';
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  }

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
        {label} <span className="text-[#C9A84C]">*</span>
      </label>
      {hint && <p className="text-xs text-gray-500 mb-1">{hint}</p>}

      {/* Preview */}
      {value && (
        <div className="relative rounded-xl overflow-hidden border border-[#1e2d4a] bg-[#0a1020] h-52">
          <img src={value} alt={altValue || 'Preview'} className="h-full w-full object-cover"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-start justify-end p-2">
            <button onClick={() => onUrlChange('')}
              className="p-1.5 bg-black/70 hover:bg-black/90 rounded-lg text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Drop zone (shown when no image) */}
      {!value && (
        <div
          onDrop={onDrop}
          onDragOver={e => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-40 border-2 border-dashed border-[#1e2d4a] hover:border-[#C9A84C]/60 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-[#C9A84C] transition-colors cursor-pointer bg-[#0a1020]"
        >
          {uploading ? (
            <>
              <Loader2 className="w-7 h-7 animate-spin" />
              <span className="text-sm font-medium">Uploading...</span>
            </>
          ) : (
            <>
              <Upload className="w-7 h-7" />
              <span className="text-sm font-medium">Click to upload or drag & drop</span>
              <span className="text-xs">JPG, PNG, WebP, GIF — up to 10 MB</span>
            </>
          )}
        </div>
      )}

      <input ref={fileInputRef} type="file" accept="image/*" onChange={onInputChange} className="hidden" />

      {/* URL input + upload button side by side */}
      <div className="flex gap-2">
        <input type="text" value={value} onChange={e => onUrlChange(e.target.value)}
          placeholder="Or paste a URL directly..." className={inputCls + ' flex-1'} />
        <button onClick={() => fileInputRef.current?.click()} disabled={uploading}
          className="px-4 py-2 rounded-lg border border-[#1e2d4a] text-gray-400 hover:text-white hover:border-[#C9A84C]/50 text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-colors disabled:opacity-40">
          {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
          Upload
        </button>
      </div>

      {uploadError && (
        <p className="text-red-400 text-xs flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" /> {uploadError}
        </p>
      )}

      {/* Alt text always shown below */}
      <div>
        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
          Image Alt Text <span className="text-[#C9A84C]">*</span>
        </label>
        {altHint && <p className="text-xs text-gray-500 mb-1">{altHint}</p>}
        <input type="text" value={altValue} onChange={e => onAltChange(e.target.value)}
          placeholder="SEO consultant reviewing GCC market analytics in Dubai office" className={inputCls} />
        <p className={`text-xs mt-1 ${altValue.length > 125 ? 'text-orange-400' : altValue.length > 0 ? 'text-green-400' : 'text-gray-500'}`}>
          {altValue.length}/125 chars — describe what's in the image, include your main keyword naturally
        </p>
      </div>
    </div>
  );
}

// ─── Rich Text Editor ─────────────────────────────────────────────────────────

function RichEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUploading, setImgUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageExt.configure({ inline: false }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || '<p></p>',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: { class: 'rich-editor-content' },
    },
  });

  // Sync initial content when a post is loaded (editor may init before value is set)
  const lastValue = useRef(value);
  useEffect(() => {
    if (editor && value !== lastValue.current && !editor.isFocused) {
      editor.commands.setContent(value || '<p></p>', { emitUpdate: false });
      lastValue.current = value;
    }
  }, [editor, value]);

  const btn = (active: boolean, title: string, onClick: () => void, children: React.ReactNode) => (
    <button type="button" title={title} onMouseDown={e => { e.preventDefault(); onClick(); }}
      className={`p-1.5 rounded transition-colors ${active ? 'bg-[#C9A84C]/20 text-[#C9A84C]' : 'text-gray-400 hover:text-white hover:bg-[#1e2d4a]'}`}>
      {children}
    </button>
  );

  async function insertImage(file: File) {
    setImgUploading(true);
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filename = `${Date.now()}-${nanoid(8)}.${ext}`;
    const { data, error } = await supabase.storage.from('blog-images').upload(filename, file, { cacheControl: '3600', upsert: false });
    if (!error && data) {
      const { data: { publicUrl } } = supabase.storage.from('blog-images').getPublicUrl(data.path);
      editor?.chain().focus().setImage({ src: publicUrl }).run();
    }
    setImgUploading(false);
  }

  if (!editor) return null;

  return (
    <div className="border border-[#1e2d4a] rounded-xl overflow-hidden bg-[#0a1020]">
      {/* Toolbar */}
      <div className="flex items-center flex-wrap gap-0.5 px-2 py-2 border-b border-[#1e2d4a] bg-[#0d1424]">
        {/* Headings + Normal */}
        <button type="button" onMouseDown={e => { e.preventDefault(); editor.chain().focus().setParagraph().run(); }}
          className={`px-2 py-1 rounded text-xs font-bold transition-colors ${editor.isActive('paragraph') && !editor.isActive('heading') ? 'bg-[#C9A84C]/20 text-[#C9A84C]' : 'text-gray-400 hover:text-white hover:bg-[#1e2d4a]'}`}>
          Normal
        </button>
        <button type="button" onMouseDown={e => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run(); }}
          className={`px-2 py-1 rounded text-xs font-bold transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-[#C9A84C]/20 text-[#C9A84C]' : 'text-gray-400 hover:text-white hover:bg-[#1e2d4a]'}`}>
          H2
        </button>
        <button type="button" onMouseDown={e => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run(); }}
          className={`px-2 py-1 rounded text-xs font-bold transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-[#C9A84C]/20 text-[#C9A84C]' : 'text-gray-400 hover:text-white hover:bg-[#1e2d4a]'}`}>
          H3
        </button>
        <span className="w-px h-4 bg-[#1e2d4a] mx-1" />
        {btn(editor.isActive('bold'), 'Bold', () => editor.chain().focus().toggleBold().run(), <Bold className="w-3.5 h-3.5" />)}
        {btn(editor.isActive('italic'), 'Italic', () => editor.chain().focus().toggleItalic().run(), <Italic className="w-3.5 h-3.5" />)}
        <span className="w-px h-4 bg-[#1e2d4a] mx-1" />
        {btn(editor.isActive('bulletList'), 'Bullet List', () => editor.chain().focus().toggleBulletList().run(), <List className="w-3.5 h-3.5" />)}
        {btn(editor.isActive('orderedList'), 'Numbered List', () => editor.chain().focus().toggleOrderedList().run(), <ListOrdered className="w-3.5 h-3.5" />)}
        {btn(editor.isActive('blockquote'), 'Blockquote', () => editor.chain().focus().toggleBlockquote().run(), <Quote className="w-3.5 h-3.5" />)}
        <span className="w-px h-4 bg-[#1e2d4a] mx-1" />
        {btn(false, 'Horizontal Rule', () => editor.chain().focus().setHorizontalRule().run(), <Minus className="w-3.5 h-3.5" />)}
        {btn(editor.isActive('table'), 'Insert Table', () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), <Table2 className="w-3.5 h-3.5" />)}
        <span className="w-px h-4 bg-[#1e2d4a] mx-1" />
        <button type="button" title="Insert Image" onMouseDown={e => { e.preventDefault(); fileRef.current?.click(); }}
          className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-[#1e2d4a] transition-colors flex items-center gap-1">
          {imgUploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Image className="w-3.5 h-3.5" />}
        </button>
        <span className="w-px h-4 bg-[#1e2d4a] mx-1" />
        {btn(false, 'Undo', () => editor.chain().focus().undo().run(), <Undo className="w-3.5 h-3.5" />)}
        {btn(false, 'Redo', () => editor.chain().focus().redo().run(), <Redo className="w-3.5 h-3.5" />)}
      </div>

      <input ref={fileRef} type="file" accept="image/*" className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) insertImage(f); e.target.value = ''; }} />

      <EditorContent editor={editor} />
    </div>
  );
}

// ─── Related Posts Picker ─────────────────────────────────────────────────────

function RelatedPostsPicker({ allPosts, selected, onChange }: {
  allPosts: SupabasePost[]; selected: string[]; onChange: (slugs: string[]) => void;
}) {
  const [search, setSearch] = useState('');
  const filtered = allPosts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.slug.toLowerCase().includes(search.toLowerCase())
  );

  function toggle(slug: string) {
    if (selected.includes(slug)) onChange(selected.filter(s => s !== slug));
    else onChange([...selected, slug]);
  }

  return (
    <div className="border border-[#1e2d4a] rounded-xl overflow-hidden bg-[#0a1020]">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#1e2d4a] bg-[#0d1424]">
        <Search className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search posts..." className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none" />
        {selected.length > 0 && (
          <span className="text-xs text-[#C9A84C] font-semibold flex-shrink-0">{selected.length} selected</span>
        )}
      </div>
      <div className="max-h-52 overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-6">No posts found</p>
        ) : filtered.map(p => (
          <label key={p.slug} className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#0d1424] cursor-pointer transition-colors border-b border-[#1e2d4a]/40 last:border-0">
            <input type="checkbox" checked={selected.includes(p.slug)} onChange={() => toggle(p.slug)}
              className="accent-[#C9A84C] w-4 h-4 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-white truncate">{p.title}</p>
              <p className="text-xs text-gray-500 truncate">/blog/{p.slug}</p>
            </div>
            {p.status === 'published' ? (
              <span className="text-xs text-green-400 flex-shrink-0">Live</span>
            ) : (
              <span className="text-xs text-yellow-400 flex-shrink-0">Draft</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}

// ─── Post Editor ──────────────────────────────────────────────────────────────

function PostEditor({ post, allPosts, onBack, onSaved }: {
  post: SupabasePost | null; allPosts: SupabasePost[]; onBack: () => void; onSaved: () => void;
}) {
  const [form, setForm] = useState<PostForm>(post ? postToForm(post) : DEFAULT_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [slugManual, setSlugManual] = useState(!!post);
  const [schemaError, setSchemaError] = useState('');

  useEffect(() => {
    if (!slugManual && form.title) setForm(f => ({ ...f, slug: slugify(f.title) }));
  }, [form.title, slugManual]);

  function set<K extends keyof PostForm>(key: K, val: PostForm[K]) {
    setForm(f => ({ ...f, [key]: val }));
  }

  function validateSchema(json: string): boolean {
    if (!json.trim()) return true;
    try { JSON.parse(json); setSchemaError(''); return true; }
    catch { setSchemaError('Invalid JSON — check syntax'); return false; }
  }

  async function save(statusOverride?: 'draft' | 'published') {
    if (!form.title.trim()) { setError('Title is required.'); return; }
    if (!form.slug.trim()) { setError('Slug is required.'); return; }
    if (!form.excerpt.trim()) { setError('Excerpt is required.'); return; }
    if (form.schema_custom && !validateSchema(form.schema_custom)) return;
    setError('');
    setSaving(true);
    const formToSave = statusOverride ? { ...form, status: statusOverride } : form;
    const payload = formToPayload(formToSave, post?.id);
    try {
      const { error: err } = post?.id
        ? await supabase.from('blog_posts').update(payload).eq('id', post.id)
        : await supabase.from('blog_posts').insert(payload);
      if (err) throw err;
      onSaved();
    } catch (e: any) {
      setError(e.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  }

  const metaTitleVal = form.meta_title || form.title;
  const metaDescVal = form.meta_description || form.excerpt;

  return (
    <div className="min-h-screen bg-[#070d1a] text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-[#070d1a]/95 backdrop-blur border-b border-[#1e2d4a] px-6 py-3 flex items-center gap-4">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm flex-shrink-0">
          <ArrowLeft className="w-4 h-4" /> Posts
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-white truncate text-sm">{post ? `Editing: ${post.title}` : 'New Post'}</h1>
        </div>
        {error && <p className="text-red-400 text-xs hidden md:block flex-shrink-0">{error}</p>}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={() => save('draft')} disabled={saving}
            className="px-4 py-2 rounded-lg border border-[#1e2d4a] text-gray-300 hover:text-white hover:border-[#C9A84C]/50 text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Draft
          </button>
          <button onClick={() => save('published')} disabled={saving}
            className="px-4 py-2 rounded-lg bg-[#C9A84C] hover:bg-[#EAB308] text-black text-sm font-bold transition-colors flex items-center gap-2 disabled:opacity-50">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
            Publish
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">

        {/* ── 1. BASIC ── */}
        <section>
          <SectionHeader icon={<FileText className="w-3.5 h-3.5" />} title="Basic Info" subtitle="Title, URL slug, category and date" />
          <div className="space-y-4">
            <Field label="Post Title" required>
              <input type="text" value={form.title} onChange={e => set('title', e.target.value)}
                placeholder="GCC SEO in 2026: What Actually Drives Rankings" className={inputCls} autoFocus />
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="URL Slug" required hint="upranked.io/blog/your-slug-here">
                <div className="flex gap-2">
                  <input type="text" value={form.slug}
                    onChange={e => { setSlugManual(true); set('slug', slugify(e.target.value)); }}
                    placeholder="gcc-seo-2026" className={inputCls} />
                  {slugManual && (
                    <button onClick={() => { setSlugManual(false); set('slug', slugify(form.title)); }}
                      className="px-3 py-2 text-xs text-gray-400 hover:text-[#C9A84C] border border-[#1e2d4a] rounded-lg whitespace-nowrap transition-colors">
                      Auto
                    </button>
                  )}
                </div>
              </Field>
              <Field label="Category">
                <select value={form.category} onChange={e => set('category', e.target.value)} className={inputCls}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Tags" hint="Comma-separated: SEO, Dubai, GCC">
                <input type="text" value={form.tags_raw} onChange={e => set('tags_raw', e.target.value)}
                  placeholder="SEO, Dubai, GCC, Growth Strategy" className={inputCls} />
              </Field>
              <Field label="Publish Date">
                <input type="date" value={form.published_at} onChange={e => set('published_at', e.target.value)} className={inputCls} />
              </Field>
            </div>
          </div>
        </section>

        {/* ── 2. HERO IMAGE ── */}
        <section>
          <SectionHeader icon={<Image className="w-3.5 h-3.5" />} title="Hero / Featured Image" subtitle="Upload from your PC or paste a URL — used at top of article, OG share, and Twitter card" />
          <ImageUpload
            label="Hero Image"
            value={form.featured_image}
            altValue={form.featured_image_alt}
            onUrlChange={v => set('featured_image', v)}
            onAltChange={v => set('featured_image_alt', v)}
            altHint="Describe the image for Google Images and screen readers — include your focus keyphrase naturally"
          />
        </section>

        {/* ── 3. CONTENT ── */}
        <section>
          <SectionHeader icon={<FileText className="w-3.5 h-3.5" />} title="Content" subtitle="Article excerpt, key intelligence summary, and body" />
          <div className="space-y-4">
            <Field label="Excerpt" required hint="2-3 sentences shown in post cards and used as fallback meta description">
              <textarea value={form.excerpt} onChange={e => set('excerpt', e.target.value)} rows={3}
                placeholder="Practical SEO framework for GCC businesses looking to dominate Google in 2026..." className={textareaCls} />
            </Field>
            <Field label="Key Intelligence" hint="3-point summary block shown at the top of the article — keep it punchy">
              <textarea value={form.key_intelligence} onChange={e => set('key_intelligence', e.target.value)} rows={3}
                placeholder="1) Bilingual SEO doubles your addressable market in the GCC. 2) Local pack visibility is now the #1 lead source for Dubai service businesses. 3) Topic authority beats single-page optimization." className={textareaCls} />
            </Field>

            {/* Rich text editor */}
            <div>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Article Body</p>
              <p className="text-xs text-gray-500 mb-3">Paste your whole article, use the toolbar for headings, lists, images and tables — or type directly here</p>
              <RichEditor value={form.content_html} onChange={v => set('content_html', v)} />
            </div>
          </div>
        </section>

        {/* ── 4. SEO ── */}
        <section>
          <SectionHeader icon={<Target className="w-3.5 h-3.5" />} title="SEO — Meta & Indexing" subtitle="Title tag, meta description, focus keyphrase, canonical, and robots" />
          <div className="space-y-4">

            <Field label="Focus Keyphrase" hint="The primary keyword this post targets — use it in title, first paragraph, and meta description">
              <input type="text" value={form.focus_keyphrase} onChange={e => set('focus_keyphrase', e.target.value)}
                placeholder="SEO agency Dubai GCC 2026" className={inputCls} />
            </Field>

            <Field label="Meta Title" hint="Appears in Google search results. If empty, uses the post title">
              <input type="text" value={form.meta_title} onChange={e => set('meta_title', e.target.value)}
                placeholder={form.title || 'Auto-filled from Post Title'} className={inputCls} />
              <div className="flex items-center justify-between mt-1">
                <CharCount value={metaTitleVal} max={60} ideal="50–60 chars" />
                {form.focus_keyphrase && !metaTitleVal.toLowerCase().includes(form.focus_keyphrase.toLowerCase()) && (
                  <p className="text-xs text-orange-400">⚠ Focus keyphrase not in title</p>
                )}
              </div>
              {/* SERP Preview */}
              {metaTitleVal && (
                <div className="mt-3 p-3 bg-white rounded-lg">
                  <p className="text-[#1a0dab] text-sm font-medium truncate" style={{ fontFamily: 'Arial, sans-serif' }}>{metaTitleVal}</p>
                  <p className="text-[#006621] text-xs mt-0.5" style={{ fontFamily: 'Arial, sans-serif' }}>upranked.io/blog/{form.slug || 'your-slug'}</p>
                  <p className="text-[#545454] text-xs mt-0.5 line-clamp-2" style={{ fontFamily: 'Arial, sans-serif' }}>{metaDescVal || 'Meta description will appear here...'}</p>
                </div>
              )}
            </Field>

            <Field label="Meta Description" hint="Shown under your title in Google. Aim for 145–160 chars. If empty, uses the excerpt">
              <textarea value={form.meta_description} onChange={e => set('meta_description', e.target.value)} rows={3}
                placeholder={form.excerpt || 'Auto-filled from Excerpt'} className={textareaCls} />
              <div className="flex items-center justify-between mt-1">
                <CharCount value={metaDescVal} max={160} ideal="145–160 chars" />
                {form.focus_keyphrase && !metaDescVal.toLowerCase().includes(form.focus_keyphrase.toLowerCase()) && (
                  <p className="text-xs text-orange-400">⚠ Focus keyphrase not in description</p>
                )}
              </div>
            </Field>

            <Field label="Canonical URL" hint="Leave empty — Google will use the page URL automatically. Only set if this content exists elsewhere too">
              <input type="url" value={form.canonical_url} onChange={e => set('canonical_url', e.target.value)}
                placeholder="https://upranked.io/blog/your-slug (leave empty in most cases)" className={inputCls} />
            </Field>

            {/* Robots */}
            <div className="border border-[#1e2d4a] rounded-xl p-4 bg-[#0a1020] space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Robots Directives</p>
              <Toggle
                label="Allow Google to index this page"
                hint="Turn OFF only for pages you don't want appearing in search results"
                checked={form.robots_index}
                onChange={v => set('robots_index', v)}
              />
              <div className="border-t border-[#1e2d4a] my-1" />
              <Toggle
                label="Allow Google to follow links on this page"
                hint="ON = Google follows your links and passes SEO value (correct for all normal posts). Turn OFF only for paid, sponsored or affiliate content as required by Google's guidelines."
                checked={form.robots_follow}
                onChange={v => set('robots_follow', v)}
              />
              {(!form.robots_index || !form.robots_follow) && (
                <p className="text-xs text-yellow-400 mt-2">
                  Robots tag: <code className="bg-[#1e2d4a] px-1.5 py-0.5 rounded text-white">
                    {form.robots_index ? 'index' : 'noindex'}, {form.robots_follow ? 'follow' : 'nofollow'}
                  </code>
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ── 5. SCHEMA ── */}
        <section>
          <SectionHeader icon={<Code2 className="w-3.5 h-3.5" />} title="Schema / Structured Data" subtitle="JSON-LD markup tells Google exactly what type of content this is — boosts rich results" />
          <div className="space-y-4">
            <Field label="Schema Type" hint="Choose the type that best matches this article's format">
              <select value={form.schema_type} onChange={e => set('schema_type', e.target.value)} className={inputCls}>
                {SCHEMA_TYPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </Field>

            {/* Auto-preview of the schema that will be generated */}
            {!form.schema_custom && (
              <div className="border border-[#1e2d4a] rounded-xl p-4 bg-[#050b14]">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Auto-Generated Schema Preview</p>
                <pre className="text-[#C9A84C] text-xs font-mono whitespace-pre-wrap break-all leading-relaxed">
{JSON.stringify({
  '@context': 'https://schema.org',
  '@type': form.schema_type,
  headline: form.title || 'Your Post Title',
  description: form.meta_description || form.excerpt || 'Your meta description',
  image: form.featured_image ? `https://upranked.io${form.featured_image}` : undefined,
  datePublished: new Date(form.published_at).toISOString(),
  dateModified: new Date().toISOString(),
  author: { '@type': 'Person', name: form.author, url: 'https://upranked.io/about' },
  publisher: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io', logo: { '@type': 'ImageObject', url: 'https://upranked.io/favicon.svg' } },
  keywords: form.focus_keyphrase || undefined,
  url: `https://upranked.io/blog/${form.slug || 'your-slug'}`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://upranked.io/blog/${form.slug || 'your-slug'}` },
}, null, 2)}
                </pre>
              </div>
            )}

            <Field label="Custom Schema JSON-LD" hint="Optional: paste your own JSON-LD to fully override the auto-generated schema above. Must be valid JSON">
              <textarea value={form.schema_custom}
                onChange={e => { set('schema_custom', e.target.value); if (e.target.value) validateSchema(e.target.value); else setSchemaError(''); }}
                rows={10} placeholder={'{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting",\n  "headline": "Your Title",\n  ...\n}'} className={codeCls} />
              {schemaError && <p className="text-red-400 text-xs mt-1">{schemaError}</p>}
              {form.schema_custom && !schemaError && <p className="text-green-400 text-xs mt-1">✓ Valid JSON</p>}
            </Field>
          </div>
        </section>

        {/* ── 6. SOCIAL ── */}
        <section>
          <SectionHeader icon={<Share2 className="w-3.5 h-3.5" />} title="Social Sharing — OG & Twitter Card" subtitle="Controls how this post looks when shared on LinkedIn, Twitter/X, WhatsApp, Facebook" />
          <div className="space-y-6">
            {/* OG */}
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider mb-3">Open Graph (Facebook, LinkedIn, WhatsApp)</p>
              <div className="space-y-4">
                <Field label="OG Title" hint="Defaults to Meta Title if empty">
                  <input type="text" value={form.og_title} onChange={e => set('og_title', e.target.value)}
                    placeholder={form.meta_title || form.title || 'Auto-filled from Meta Title'} className={inputCls} />
                </Field>
                <Field label="OG Description" hint="Defaults to Meta Description if empty">
                  <textarea value={form.og_description} onChange={e => set('og_description', e.target.value)} rows={2}
                    placeholder={form.meta_description || form.excerpt || 'Auto-filled from Meta Description'} className={textareaCls} />
                </Field>
                <UploadOrUrl
                  label="OG Image"
                  value={form.og_image}
                  onChange={v => set('og_image', v)}
                  placeholder={form.featured_image || 'Upload or paste URL — 1200×630px ideal'}
                  hint="Defaults to Hero Image if empty — ideal size: 1200 × 630 px"
                />
                <Field label="OG Image Alt Text" hint="Describes the image for accessibility">
                  <input type="text" value={form.og_image_alt} onChange={e => set('og_image_alt', e.target.value)}
                    placeholder={form.featured_image_alt || 'Descriptive alt text for the shared image'} className={inputCls} />
                </Field>
              </div>
            </div>

            {/* Twitter */}
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider mb-3">Twitter / X Card</p>
              <div className="space-y-4">
                <Field label="Card Type">
                  <select value={form.twitter_card} onChange={e => set('twitter_card', e.target.value)} className={inputCls}>
                    {TWITTER_CARDS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </Field>
                <Field label="Twitter Title" hint="Defaults to OG Title → Meta Title if empty">
                  <input type="text" value={form.twitter_title} onChange={e => set('twitter_title', e.target.value)}
                    placeholder={form.og_title || form.meta_title || form.title || 'Auto-filled'} className={inputCls} />
                  <CharCount value={form.twitter_title || form.og_title || form.meta_title || form.title} max={70} />
                </Field>
                <Field label="Twitter Description" hint="Defaults to OG Description → Meta Description if empty">
                  <textarea value={form.twitter_description} onChange={e => set('twitter_description', e.target.value)} rows={2}
                    placeholder={form.og_description || form.meta_description || form.excerpt || 'Auto-filled'} className={textareaCls} />
                  <CharCount value={form.twitter_description || form.og_description || form.meta_description || form.excerpt} max={200} />
                </Field>
                <UploadOrUrl
                  label="Twitter Image"
                  value={form.twitter_image}
                  onChange={v => set('twitter_image', v)}
                  placeholder={form.og_image || form.featured_image || 'Auto-filled from OG / Hero Image'}
                  hint="Defaults to OG Image → Hero Image if empty"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <section>
          <SectionHeader icon={<Target className="w-3.5 h-3.5" />} title="Call to Action" subtitle="The CTA block shown at the bottom of the article" />
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="CTA Heading">
                <input type="text" value={form.cta_heading} onChange={e => set('cta_heading', e.target.value)} className={inputCls} />
              </Field>
              <Field label="CTA Button Label">
                <input type="text" value={form.cta_label} onChange={e => set('cta_label', e.target.value)} className={inputCls} />
              </Field>
            </div>
            <Field label="CTA Body Text">
              <textarea value={form.cta_body} onChange={e => set('cta_body', e.target.value)} rows={2} className={textareaCls} />
            </Field>
            <Field label="CTA Button Link">
              <input type="text" value={form.cta_href} onChange={e => set('cta_href', e.target.value)} placeholder="/contact" className={inputCls} />
            </Field>
          </div>
        </section>

        {/* ── 8. AUTHOR & RELATED ── */}
        <section>
          <SectionHeader icon={<Globe className="w-3.5 h-3.5" />} title="Author & Related Posts" />
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Author Name">
                <input type="text" value={form.author} onChange={e => set('author', e.target.value)} className={inputCls} />
              </Field>
            </div>
            <Field label="Author Image URL" hint="Default is Sama's photo — only change if guest post">
              <input type="text" value={form.author_image} onChange={e => set('author_image', e.target.value)} className={inputCls} />
            </Field>
            <Field label="Related Posts" hint="Pick posts to recommend at the bottom of this article">
              <RelatedPostsPicker
                allPosts={allPosts.filter(p => p.slug !== form.slug)}
                selected={form.related_slugs}
                onChange={v => set('related_slugs', v)}
              />
            </Field>
          </div>
        </section>

        {/* Bottom actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1e2d4a] pb-12">
          {error ? (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          ) : <div />}
          <div className="flex items-center gap-3">
            <button onClick={() => save('draft')} disabled={saving}
              className="px-5 py-2.5 rounded-lg border border-[#1e2d4a] text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save Draft
            </button>
            <button onClick={() => save('published')} disabled={saving}
              className="px-5 py-2.5 rounded-lg bg-[#C9A84C] hover:bg-[#EAB308] text-black text-sm font-bold transition-colors flex items-center gap-2 disabled:opacity-50">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Claude Token Tracker ─────────────────────────────────────────────────────

function TokenTracker() {
  const LIMIT = 1_000_000;
  const [used, setUsed] = useState(() => {
    const saved = localStorage.getItem('claude_tokens_used');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState('');

  function startEdit() {
    setInput(String(used));
    setEditing(true);
  }

  function save() {
    const n = parseInt(input.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(n) && n >= 0) {
      setUsed(n);
      localStorage.setItem('claude_tokens_used', String(n));
    }
    setEditing(false);
  }

  const pct = Math.min(100, (used / LIMIT) * 100);
  const remaining = Math.max(0, LIMIT - used);
  const barColor = pct >= 90 ? '#f87171' : pct >= 70 ? '#fbbf24' : '#C9A84C';

  function fmt(n: number) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M';
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
    return String(n);
  }

  return (
    <div className="mx-6 mt-5 mb-1 bg-[#0a1020] border border-[#1e2d4a] rounded-xl px-5 py-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: `${barColor}22` }}>
            <span className="text-[10px] font-black" style={{ color: barColor }}>AI</span>
          </div>
          <p className="text-xs font-semibold text-white uppercase tracking-wider">Claude Token Budget</p>
        </div>
        <button onClick={startEdit}
          className="text-xs text-gray-500 hover:text-[#C9A84C] transition-colors underline underline-offset-2">
          Update
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-[#1e2d4a] rounded-full overflow-hidden mb-2">
        <div className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: barColor }} />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400">
          <span className="font-bold" style={{ color: barColor }}>{fmt(used)}</span>
          <span className="text-gray-600"> / 1M tokens used</span>
        </p>
        <p className="text-xs font-bold" style={{ color: barColor }}>
          {pct.toFixed(1)}%
          <span className="text-gray-500 font-normal"> · {fmt(remaining)} remaining</span>
        </p>
      </div>

      {editing && (
        <div className="mt-3 flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') setEditing(false); }}
            placeholder="Paste token count from /cost"
            autoFocus
            className="flex-1 bg-[#070d1a] border border-[#1e2d4a] focus:border-[#C9A84C] rounded-lg px-3 py-1.5 text-white text-xs placeholder-gray-600 focus:outline-none transition-colors"
          />
          <button onClick={save}
            className="px-3 py-1.5 bg-[#C9A84C] hover:bg-[#EAB308] text-black text-xs font-bold rounded-lg transition-colors">
            Save
          </button>
          <button onClick={() => setEditing(false)}
            className="px-3 py-1.5 border border-[#1e2d4a] text-gray-400 hover:text-white text-xs rounded-lg transition-colors">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Post List ────────────────────────────────────────────────────────────────

function PostList({ posts, loading, onNew, onEdit, onDelete, onTogglePublish, onLogout }: {
  posts: SupabasePost[]; loading: boolean;
  onNew: () => void; onEdit: (p: SupabasePost) => void;
  onDelete: (id: string) => void; onTogglePublish: (p: SupabasePost) => void; onLogout: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#070d1a] text-white">
      <div className="border-b border-[#1e2d4a] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#C9A84C] to-[#EAB308] rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-sm">U</span>
          </div>
          <div>
            <p className="font-bold text-white text-sm leading-tight">upranked.io</p>
            <p className="text-gray-500 text-xs">Blog Admin</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/blog/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xs flex items-center gap-1.5 transition-colors">
            <Globe className="w-3.5 h-3.5" /> View Blog
          </a>
          <button onClick={onLogout} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>
      <TokenTracker />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Blog Posts</h1>
            <p className="text-gray-500 text-sm mt-1">
              {posts.filter(p => p.status === 'published').length} published · {posts.filter(p => p.status === 'draft').length} drafts
            </p>
          </div>
          <button onClick={onNew} className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#EAB308] text-black font-bold px-5 py-2.5 rounded-xl transition-colors">
            <Plus className="w-4 h-4" /> New Post
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-[#C9A84C]" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#1e2d4a] rounded-2xl">
            <FileText className="w-10 h-10 text-gray-700 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">No posts yet</p>
            <p className="text-gray-600 text-sm mt-1">Create your first blog post to get started</p>
            <button onClick={onNew} className="mt-5 text-[#C9A84C] text-sm hover:underline font-semibold">Create first post →</button>
          </div>
        ) : (
          <div className="space-y-2">
            {posts.map(post => (
              <div key={post.id}
                className="flex items-center gap-4 bg-[#0a1020] hover:bg-[#0d1424] border border-[#1e2d4a] hover:border-[#C9A84C]/30 rounded-xl px-5 py-4 transition-all group">
                <div className="flex-shrink-0 w-20">
                  {post.status === 'published' ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">
                      <CheckCircle className="w-2.5 h-2.5" /> Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-1 rounded-full">
                      <Clock className="w-2.5 h-2.5" /> Draft
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate">{post.title}</p>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <span className="text-gray-500 text-xs">/blog/{post.slug}</span>
                    <span className="text-gray-700 text-xs">·</span>
                    <span className="text-gray-500 text-xs">{post.category}</span>
                    <span className="text-gray-700 text-xs">·</span>
                    <span className="text-gray-500 text-xs">
                      {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <button onClick={() => onEdit(post)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1e2d4a] transition-colors" title="Edit">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button onClick={() => onTogglePublish(post)}
                    className={`p-2 rounded-lg transition-colors ${post.status === 'published' ? 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10' : 'text-gray-400 hover:text-green-400 hover:bg-green-400/10'}`}
                    title={post.status === 'published' ? 'Unpublish' : 'Publish'}>
                    {post.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button onClick={() => { if (window.confirm(`Delete "${post.title}"?\n\nThis cannot be undone.`)) onDelete(post.id); }}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-colors" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Login ────────────────────────────────────────────────────────────────────

const loginInputCls = 'w-full bg-[#0d1424] border border-[#1e2d4a] rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C] transition-colors';

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) setError(err.message);
    else onLogin();
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#070d1a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#C9A84C] to-[#EAB308] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#C9A84C]/20">
            <span className="text-black font-black text-3xl">U</span>
          </div>
          <h1 className="text-2xl font-bold text-white">upranked.io</h1>
          <p className="text-gray-500 text-sm mt-1">Blog Admin Panel</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoFocus className={loginInputCls} placeholder="sam@upranked.io" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className={loginInputCls} placeholder="••••••••" />
          </div>
          {error && (
            <div className="flex items-start gap-2 text-red-400 text-sm bg-red-900/20 border border-red-800/30 rounded-lg px-4 py-3">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl bg-[#C9A84C] hover:bg-[#EAB308] text-black font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mt-2">
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 text-xs mt-6">
          Manage your admin account at Supabase Dashboard → Authentication → Users
        </p>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [view, setView] = useState<View>('list');
  const [editingPost, setEditingPost] = useState<SupabasePost | null>(null);
  const [posts, setPosts] = useState<SupabasePost[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthed(!!session);
      setChecking(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setAuthed(!!session));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => { if (authed) loadPosts(); }, [authed]);

  async function loadPosts() {
    setPostsLoading(true);
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (data) setPosts(data as SupabasePost[]);
    setPostsLoading(false);
  }

  async function handleDelete(id: string) {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (!error) setPosts(p => p.filter(pp => pp.id !== id));
  }

  async function handleTogglePublish(post: SupabasePost) {
    const newStatus = post.status === 'published' ? 'draft' : 'published';
    const { error } = await supabase.from('blog_posts').update({ status: newStatus }).eq('id', post.id);
    if (!error) setPosts(p => p.map(pp => pp.id === post.id ? { ...pp, status: newStatus } : pp));
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[#070d1a] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-[#C9A84C]" />
      </div>
    );
  }

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;

  if (view === 'editor') {
    return (
      <PostEditor
        post={editingPost}
        allPosts={posts}
        onBack={() => { setView('list'); setEditingPost(null); }}
        onSaved={() => { setView('list'); setEditingPost(null); loadPosts(); }}
      />
    );
  }

  return (
    <PostList
      posts={posts} loading={postsLoading}
      onNew={() => { setEditingPost(null); setView('editor'); }}
      onEdit={post => { setEditingPost(post); setView('editor'); }}
      onDelete={handleDelete}
      onTogglePublish={handleTogglePublish}
      onLogout={() => supabase.auth.signOut()}
    />
  );
}

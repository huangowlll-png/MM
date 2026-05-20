import { useState } from 'react';
import { shopifyThemeStructure, ShopifyThemeFile } from '../data/shopifyThemeData';
import { Library, Folder, FileCode, Check, Copy, Search, HelpCircle, Layers, CheckCircle2, Download } from 'lucide-react';
import JSZip from 'jszip';

export default function ShopifyThemeHub() {
  const [selectedFile, setSelectedFile] = useState<ShopifyThemeFile>(shopifyThemeStructure[1]); // Default to index.json
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'layout' | 'templates' | 'sections' | 'snippets' | 'config' | 'assets'>('all');
  const [downloadingZip, setDownloadingZip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    setDownloadingZip(true);
    try {
      const zip = new JSZip();
      
      // Populate standard Shopify OS 2.0 folders inside raw ZIP root
      shopifyThemeStructure.forEach(file => {
        zip.file(file.path, file.code);
      });
      
      // Compile ZIP in-memory
      const content = await zip.generateAsync({ type: 'blob' });
      
      // Auto-trigger client-side browser download
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'modmingle-lazy-girl-shampoo-theme.zip';
      document.body.appendChild(link);
      link.click();
      
      // Clean references
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Failed to bundle theme ZIP:', e);
    } finally {
      setDownloadingZip(false);
    }
  };

  const filteredFiles = shopifyThemeStructure.filter(file => {
    const matchesSearch = file.path.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          file.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || file.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-[500px] bg-neutral-900 text-white rounded-[2rem] border-4 border-black overflow-hidden shadow-2xl">
      
      {/* Sidebar: File list and folder taxonomy */}
      <div className="w-full lg:w-[350px] bg-neutral-950 border-r border-neutral-800 flex flex-col shrink-0 p-6 overflow-y-auto">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Library size={12} /> Theme Dev Guide
          </div>
          <h2 className="text-2xl font-black font-bricolage tracking-tight">Dawn Customizations</h2>
          <p className="text-xs text-neutral-400 mt-1 leading-snug mb-4">
            ModMingle OS 2.0 implementation structure based on Shopify Dawn architecture.
          </p>

          {/* Quick-depoyment ZIP download button */}
          <button
            onClick={handleDownloadZip}
            disabled={downloadingZip}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-[#FF0050] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-pink-500/20 transition-all flex items-center justify-center gap-2 border border-pink-400/20 cursor-pointer"
          >
            {downloadingZip ? (
              <>
                <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></div>
                <span>Packaging Theme...</span>
              </>
            ) : (
              <>
                <Download size={14} />
                <span>Download Shopify Theme ZIP</span>
              </>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search theme files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 text-sm px-4 py-2.5 pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-white placeholder-neutral-500"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
        </div>

        {/* Tab filters */}
        <div className="grid grid-cols-3 gap-1.5 mb-6 text-[10px] font-black uppercase text-center">
          {(['all', 'layout', 'templates', 'sections', 'snippets', 'config', 'assets'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1.5 px-2 rounded-lg border transition-all ${
                activeTab === tab
                  ? 'bg-white text-black border-white'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-850 hover:bg-neutral-850'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Required Files Checklist card */}
        <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-4 mb-6">
          <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-1.5">
            <Layers size={12} className="text-pink-400" />
            <span>Theme Requirements</span>
          </h4>
          <div className="space-y-1.5 text-[11px] text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-green-500 shrink-0" />
              <span>Homepage Layout (index.json)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-green-500 shrink-0" />
              <span>Product Template (product.json)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-green-500 shrink-0" />
              <span>Announcement Bar (Liquid Section)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-green-500 shrink-0" />
              <span>TikTok UGC section (Liquid Section)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-green-500 shrink-0" />
              <span>Sticky Add to Cart snippet</span>
            </div>
          </div>
        </div>

        {/* File Browser list */}
        <div className="flex-1 space-y-4">
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Files in theme directory</div>
          <div className="space-y-1">
            {filteredFiles.map((file, i) => {
              const isSelected = selectedFile.path === file.path;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedFile(file);
                    setCopied(false);
                  }}
                  className={`w-full flex items-center justify-between text-left p-2.5 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-pink-600/20 text-white border border-pink-500/40'
                      : 'hover:bg-neutral-900 text-neutral-400 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    {file.category === 'layout' || file.category === 'config' ? (
                      <Folder size={16} className={isSelected ? 'text-pink-400' : 'text-neutral-500'} />
                    ) : (
                      <FileCode size={16} className={isSelected ? 'text-pink-400' : 'text-neutral-500'} />
                    )}
                    <span className="text-xs font-mono truncate">{file.path}</span>
                  </div>
                  <span className="text-[10px] uppercase bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded shrink-0">
                    {file.category}
                  </span>
                </button>
              );
            })}
            {filteredFiles.length === 0 && (
              <div className="text-xs text-neutral-500 text-center py-6 mt-2">
                No matching theme files found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Panel: Interactive Code Viewer */}
      <div className="flex-1 flex flex-col bg-neutral-900 border-l border-neutral-800 overflow-hidden">
        
        {/* Banner with general explanation */}
        <div className="p-6 border-b border-neutral-800 bg-neutral-950/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-neutral-500">Shopify Theme File Reference</span>
              <span className="text-[10px] font-black text-pink-500 bg-pink-500/10 px-2 py-0.5 rounded-full uppercase">Dawn Compatible</span>
            </div>
            <h3 className="text-xl font-extrabold font-mono text-white flex items-center gap-2">
              <FileCode className="text-pink-500" size={20} />
              {selectedFile.path}
            </h3>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95"
          >
            {copied ? (
              <>
                <Check size={14} className="text-green-400" />
                <span className="text-green-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Entire File</span>
              </>
            )}
          </button>
        </div>

        {/* Detailed Usage Explanation Box */}
        <div className="p-5 bg-neutral-950 border-b border-neutral-850/80 flex items-start gap-3">
          <HelpCircle size={18} className="text-pink-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-black uppercase text-pink-400 tracking-wider block mb-0.5">Integration Guidelines</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-outfit">
              {selectedFile.description}
            </p>
          </div>
        </div>

        {/* CSS-Styled Syntax Scroll Box */}
        <div className="flex-1 overflow-auto p-6 bg-neutral-950/90 font-mono text-xs leading-relaxed custom-scrollbar max-h-[600px]">
          <pre className="text-neutral-300">
            <code>
              {selectedFile.code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

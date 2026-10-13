import { Copy, CheckCircle2, Download, Smartphone, Tablet, Monitor, Loader2, Link2, Unlink2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/core';

interface ToolbarProps {
    previewDevice: 'mobile' | 'tablet' | 'pc';
    onDeviceChange: (device: 'mobile' | 'tablet' | 'pc') => void;
    onExportPdf: () => void;
    onExportHtml: () => void;
    onCopy: () => void;
    copied: boolean;
    isCopying: boolean;
    scrollSyncEnabled: boolean;
    onToggleScrollSync: () => void;
}

export default function Toolbar({ previewDevice, onDeviceChange, onExportPdf, onExportHtml, onCopy, copied, isCopying, scrollSyncEnabled, onToggleScrollSync }: ToolbarProps) {
    const { t } = useI18n();
    const tb = t.toolbar;

    return (
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-[1024px]">
            <div className="hidden md:flex bg-[#00000008] dark:bg-[#ffffff10] p-1 rounded-full backdrop-blur-md">
                <button
                    data-testid="device-mobile"
                    onClick={() => onDeviceChange('mobile')}
                    className={`p-2 rounded-full transition-all ${previewDevice === 'mobile' ? 'bg-white dark:bg-[#2c2c2e] shadow-sm' : 'text-[#86868b] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'}`}
                    title={tb.deviceMobile}
                >
                    <Smartphone size={16} />
                </button>
                <button
                    data-testid="device-tablet"
                    onClick={() => onDeviceChange('tablet')}
                    className={`p-2 rounded-full transition-all ${previewDevice === 'tablet' ? 'bg-white dark:bg-[#2c2c2e] shadow-sm' : 'text-[#86868b] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'}`}
                    title={tb.deviceTablet}
                >
                    <Tablet size={16} />
                </button>
                <button
                    data-testid="device-pc"
                    onClick={() => onDeviceChange('pc')}
                    className={`p-2 rounded-full transition-all ${previewDevice === 'pc' ? 'bg-white dark:bg-[#2c2c2e] shadow-sm' : 'text-[#86868b] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'}`}
                    title={tb.devicePc}
                >
                    <Monitor size={16} />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    data-testid="scroll-sync-toggle"
                    onClick={onToggleScrollSync}
                    className={`apple-export-btn !bg-[#00000008] dark:!bg-[#ffffff10] border-transparent ${scrollSyncEnabled ? 'text-[#0066cc] dark:text-[#0a84ff]' : 'text-[#86868b] dark:text-[#a1a1a6]'}`}
                    title={scrollSyncEnabled ? tb.scrollSyncDisable : tb.scrollSyncEnable}
                >
                    {scrollSyncEnabled ? <Link2 size={14} /> : <Unlink2 size={14} />}
                    <span className="hidden sm:inline">{scrollSyncEnabled ? tb.scrollSyncOn : tb.scrollSyncOff}</span>
                    <span className="sm:hidden">{scrollSyncEnabled ? tb.scrollSyncOnShort : tb.scrollSyncOffShort}</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    data-testid="export-pdf"
                    onClick={onExportPdf}
                    className="apple-export-btn !hidden sm:!flex !bg-[#00000008] dark:!bg-[#ffffff10] border-transparent"
                >
                    <Download size={14} />
                    {tb.exportPdf}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    data-testid="export-html"
                    onClick={onExportHtml}
                    className="apple-export-btn !hidden lg:!flex !bg-[#00000008] dark:!bg-[#ffffff10] border-transparent"
                >
                    <Download size={14} />
                    {tb.exportHtml}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    data-testid="copy-button"
                    onClick={onCopy}
                    disabled={isCopying}
                    className={copied ? "apple-copy-btn-success apple-copy-btn" : isCopying ? "apple-copy-btn opacity-80 cursor-not-allowed" : "apple-copy-btn"}
                >
                    {copied ? <CheckCircle2 size={16} /> : isCopying ? <Loader2 className="animate-spin" size={16} /> : <Copy size={16} />}
                    <span className="hidden sm:inline">{copied ? tb.copied : isCopying ? tb.copying : tb.copy}</span>
                    <span className="sm:hidden">{copied ? tb.copiedShort : isCopying ? tb.copyingShort : tb.copyShort}</span>
                </motion.button>
            </div>
        </div>
    );
}

import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
export const HtmlEditor = ({ name, value, id, rows = 15 }) => {
    const inputId = id || name;
    const uniqueId = `pell_${inputId}_${Date.now()}`;
    // Calculate height based on rows (approx 24px per row)
    const editorHeight = rows * 24;
    return (_jsxs("div", { class: "html-editor-wrapper", children: [_jsx("link", { rel: "stylesheet", href: "https://unpkg.com/pell/dist/pell.min.css" }), _jsx("input", { type: "hidden", name: name, id: inputId, value: value || "" }), _jsx("div", { id: uniqueId, class: "pell-editor" }), _jsx("script", { src: "https://unpkg.com/pell" }), _jsx("script", { dangerouslySetInnerHTML: {
                    __html: `
          (function() {
            const hiddenInput = document.getElementById('${inputId}');
            const editorContainer = document.getElementById('${uniqueId}');

            // Wait for pell to be available
            function initPell() {
              if (typeof pell === 'undefined') {
                setTimeout(initPell, 50);
                return;
              }

              const editor = pell.init({
                element: editorContainer,
                onChange: html => {
                  hiddenInput.value = html;
                },
                defaultParagraphSeparator: 'p',
                styleWithCSS: false,
                actions: [
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  {
                    name: 'heading2',
                    icon: 'H2',
                    title: 'Überschrift 2',
                    result: () => pell.exec('formatBlock', '<h2>')
                  },
                  {
                    name: 'heading3',
                    icon: 'H3',
                    title: 'Überschrift 3',
                    result: () => pell.exec('formatBlock', '<h3>')
                  },
                  'paragraph',
                  'olist',
                  'ulist',
                  'link',
                  'line'
                ]
              });

              // Set initial content
              editor.content.innerHTML = hiddenInput.value || '';

              // Set editor height
              editor.content.style.minHeight = '${editorHeight}px';
            }

            initPell();
          })();
        `
                } }), _jsx("style", { dangerouslySetInnerHTML: {
                    __html: `
          .html-editor-wrapper .pell-editor {
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
          }
          .html-editor-wrapper .pell-actionbar {
            background: #f8f9fa;
            border-bottom: 1px solid #ddd;
          }
          .html-editor-wrapper .pell-button {
            background: transparent;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            font-size: 14px;
            color: #333;
          }
          .html-editor-wrapper .pell-button:hover {
            background: #e9ecef;
          }
          .html-editor-wrapper .pell-button-selected {
            background: #007bff;
            color: white;
          }
          .html-editor-wrapper .pell-content {
            padding: 16px;
            background: white;
            outline: none;
          }
          .html-editor-wrapper .pell-content h2 {
            font-size: 1.5em;
            margin: 0.5em 0;
          }
          .html-editor-wrapper .pell-content h3 {
            font-size: 1.25em;
            margin: 0.5em 0;
          }
          .html-editor-wrapper .pell-content p {
            margin: 0.5em 0;
          }
          .html-editor-wrapper .pell-content ul,
          .html-editor-wrapper .pell-content ol {
            margin: 0.5em 0;
            padding-left: 2em;
          }
          .html-editor-wrapper .pell-content a {
            color: #007bff;
            text-decoration: underline;
          }
        `
                } })] }));
};
//# sourceMappingURL=HtmlEditor.js.map
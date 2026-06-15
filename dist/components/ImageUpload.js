import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
export const ImageUpload = ({ name, value, id }) => {
    const inputId = id || name;
    const uniqueId = `upload_${inputId}_${Date.now()}`;
    return (_jsxs("div", { class: "image-upload", id: `${uniqueId}_container`, children: [_jsx("input", { type: "hidden", name: name, id: inputId, value: value || "" }), _jsx("input", { type: "file", id: `${uniqueId}_file`, accept: "image/jpeg,image/png,image/gif,image/webp" }), _jsx("label", { for: `${uniqueId}_file`, class: "image-upload-btn", children: "Bild ausw\u00E4hlen" }), _jsxs("p", { class: "image-upload-text", children: ["oder Bild hierher ziehen", _jsx("br", {}), _jsx("small", { children: "Max. 5MB (JPEG, PNG, GIF, WebP)" })] }), _jsx("div", { class: "image-upload-status", id: `${uniqueId}_status` }), value && (_jsxs("div", { class: "image-preview", id: `${uniqueId}_preview`, children: [_jsx("img", { src: value, alt: "Vorschau" }), _jsx("button", { type: "button", class: "image-preview-remove", id: `${uniqueId}_remove`, children: "\u00D7" })] })), !value && _jsx("div", { class: "image-preview", id: `${uniqueId}_preview`, style: "display: none;" }), _jsx("script", { dangerouslySetInnerHTML: {
                    __html: `
          (function() {
            const container = document.getElementById('${uniqueId}_container');
            const fileInput = document.getElementById('${uniqueId}_file');
            const hiddenInput = document.getElementById('${inputId}');
            const status = document.getElementById('${uniqueId}_status');
            const preview = document.getElementById('${uniqueId}_preview');

            function updatePreview(url) {
              if (url) {
                preview.innerHTML = '<img src="' + url + '" alt="Vorschau"><button type="button" class="image-preview-remove" id="${uniqueId}_remove">×</button>';
                preview.style.display = 'inline-block';
                preview.querySelector('.image-preview-remove').addEventListener('click', removeImage);
              } else {
                preview.innerHTML = '';
                preview.style.display = 'none';
              }
            }

            function removeImage() {
              hiddenInput.value = '';
              updatePreview('');
              status.textContent = '';
              status.className = 'image-upload-status';
            }

            // Initialize remove button if exists
            const removeBtn = document.getElementById('${uniqueId}_remove');
            if (removeBtn) {
              removeBtn.addEventListener('click', removeImage);
            }

            async function uploadFile(file) {
              status.textContent = 'Hochladen...';
              status.className = 'image-upload-status uploading';

              const formData = new FormData();
              formData.append('file', file);

              try {
                const response = await fetch('/admin/upload', {
                  method: 'POST',
                  body: formData
                });

                const result = await response.json();

                if (response.ok && result.url) {
                  hiddenInput.value = result.url;
                  updatePreview(result.url);
                  status.textContent = 'Hochgeladen!';
                  status.className = 'image-upload-status success';
                } else {
                  status.textContent = result.error || 'Fehler beim Hochladen';
                  status.className = 'image-upload-status error';
                }
              } catch (e) {
                status.textContent = 'Netzwerkfehler';
                status.className = 'image-upload-status error';
              }
            }

            fileInput.addEventListener('change', function(e) {
              const file = e.target.files[0];
              if (file) uploadFile(file);
            });

            // Drag and drop
            container.addEventListener('dragover', function(e) {
              e.preventDefault();
              container.classList.add('dragover');
            });

            container.addEventListener('dragleave', function(e) {
              container.classList.remove('dragover');
            });

            container.addEventListener('drop', function(e) {
              e.preventDefault();
              container.classList.remove('dragover');
              const file = e.dataTransfer.files[0];
              if (file && file.type.startsWith('image/')) {
                uploadFile(file);
              }
            });
          })();
        `
                } })] }));
};
//# sourceMappingURL=ImageUpload.js.map
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "hono/jsx/jsx-runtime";
export const AdminLayout = ({ title = "Admin", username, children }) => {
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { charset: "UTF-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "robots", content: "noindex, nofollow" }), _jsxs("title", { children: [title, " | Admin"] }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }), _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap", rel: "stylesheet" }), _jsx("style", { children: `
          :root {
            --primary: #0f172a;
            --primary-light: #1e293b;
            --primary-hover: #334155;
            --accent: #3b82f6;
            --accent-hover: #2563eb;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text: #1e293b;
            --text-muted: #64748b;
            --text-light: #94a3b8;
            --border: #e2e8f0;
            --border-light: #f1f5f9;
            --success: #10b981;
            --success-bg: #ecfdf5;
            --danger: #ef4444;
            --danger-bg: #fef2f2;
            --warning: #f59e0b;
            --warning-bg: #fffbeb;
            --info: #3b82f6;
            --info-bg: #eff6ff;
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --radius: 8px;
            --radius-lg: 12px;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', -apple-System, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
            font-size: 14px;
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
          }

          .admin-wrapper {
            display: flex;
            min-height: 100vh;
          }

          .admin-sidebar {
            width: 260px;
            background: var(--primary);
            color: #fff;
            padding: 0;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 100;
          }

          .sidebar-header {
            padding: 1.5rem 1.25rem;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }

          .sidebar-header h1 {
            font-size: 1.125rem;
            font-weight: 600;
            letter-spacing: -0.025em;
          }

          .sidebar-header h1 a {
            color: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .sidebar-header .logo-icon {
            width: 32px;
            height: 32px;
            background: var(--accent);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.875rem;
          }

          .sidebar-nav {
            flex: 1;
            padding: 1rem 0.75rem;
            overflow-y: auto;
          }

          .nav-section {
            margin-bottom: 1.5rem;
          }

          .nav-section-title {
            font-size: 0.6875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: rgba(255,255,255,0.4);
            padding: 0 0.75rem;
            margin-bottom: 0.5rem;
          }

          .admin-sidebar nav a {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            padding: 0.625rem 0.75rem;
            border-radius: 6px;
            margin-bottom: 2px;
            transition: all 0.15s ease;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .admin-sidebar nav a:hover {
            background: rgba(255,255,255,0.08);
            color: #fff;
          }

          .admin-sidebar nav a.active {
            background: var(--accent);
            color: #fff;
          }

          .nav-icon {
            width: 18px;
            height: 18px;
            opacity: 0.8;
            flex-shrink: 0;
          }

          .sidebar-footer {
            padding: 1rem 1.25rem;
            border-top: 1px solid rgba(255,255,255,0.08);
            background: rgba(0,0,0,0.1);
          }

          .user-card {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
          }

          .user-avatar {
            width: 36px;
            height: 36px;
            background: var(--accent);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.875rem;
            color: #fff;
          }

          .user-info {
            flex: 1;
            min-width: 0;
          }

          .user-info .name {
            font-weight: 600;
            font-size: 0.875rem;
            color: #fff;
          }

          .user-info .role {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.5);
          }

          .admin-main {
            flex: 1;
            margin-left: 260px;
            min-height: 100vh;
            background: var(--bg);
          }

          .main-header {
            background: var(--card-bg);
            border-bottom: 1px solid var(--border);
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .main-header h2 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text);
            letter-spacing: -0.025em;
          }

          .main-content {
            padding: 1.5rem 2rem 2rem;
          }

          .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .admin-header h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text);
            letter-spacing: -0.025em;
          }

          .card {
            background: var(--card-bg);
            border-radius: var(--radius-lg);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-light);
          }

          .card h3 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid var(--border);
            color: var(--text);
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            border: none;
            transition: all 0.15s ease;
            line-height: 1.5;
          }

          .btn-primary {
            background: var(--accent);
            color: #fff;
          }

          .btn-primary:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
          }

          .btn-secondary {
            background: var(--card-bg);
            color: var(--text);
            border: 1px solid var(--border);
          }

          .btn-secondary:hover {
            background: var(--bg);
            border-color: var(--text-light);
          }

          .btn-success {
            background: var(--success);
            color: #fff;
          }

          .btn-success:hover {
            background: #059669;
          }

          .btn-danger {
            background: var(--danger);
            color: #fff;
          }

          .btn-danger:hover {
            background: #dc2626;
          }

          .btn-sm {
            padding: 0.375rem 0.75rem;
            font-size: 0.8125rem;
          }

          .btn-ghost {
            background: transparent;
            color: var(--text-muted);
            padding: 0.375rem 0.5rem;
          }

          .btn-ghost:hover {
            background: var(--bg);
            color: var(--text);
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          table th,
          table td {
            padding: 0.875rem 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }

          table th {
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            background: var(--bg);
          }

          table tbody tr {
            transition: background 0.1s ease;
          }

          table tbody tr:hover {
            background: var(--border-light);
          }

          table tbody tr:last-child td {
            border-bottom: none;
          }

          .form-group {
            margin-bottom: 1.25rem;
          }

          .form-group label {
            display: block;
            font-weight: 500;
            margin-bottom: 0.375rem;
            font-size: 0.875rem;
            color: var(--text);
          }

          .form-group .hint {
            font-size: 0.8125rem;
            color: var(--text-muted);
            margin-top: 0.25rem;
          }

          .form-group input,
          .form-group textarea,
          .form-group select {
            width: 100%;
            padding: 0.625rem 0.875rem;
            border: 1px solid var(--border);
            border-radius: 6px;
            font-size: 0.9375rem;
            font-family: inherit;
            background: var(--card-bg);
            color: var(--text);
            transition: all 0.15s ease;
          }

          .form-group input::placeholder,
          .form-group textarea::placeholder {
            color: var(--text-light);
          }

          .form-group textarea {
            min-height: 120px;
            resize: vertical;
          }

          .form-group input:focus,
          .form-group textarea:focus,
          .form-group select:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
          }

          .form-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .alert {
            padding: 0.875rem 1rem;
            border-radius: var(--radius);
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            font-size: 0.875rem;
          }

          .alert-success {
            background: var(--success-bg);
            color: #065f46;
            border: 1px solid #a7f3d0;
          }

          .alert-danger {
            background: var(--danger-bg);
            color: #991b1b;
            border: 1px solid #fecaca;
          }

          .alert-info {
            background: var(--info-bg);
            color: #1e40af;
            border: 1px solid #bfdbfe;
          }

          .info-box {
            background: var(--info-bg);
            border: 1px solid #bfdbfe;
            border-radius: var(--radius);
            padding: 0.875rem 1rem;
            margin-bottom: 1.25rem;
            color: #1e40af;
            font-size: 0.875rem;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.25rem;
            margin-bottom: 2rem;
          }

          .stat-card {
            background: var(--card-bg);
            padding: 1.5rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow);
            border: 1px solid var(--border-light);
            position: relative;
            overflow: hidden;
          }

          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--accent);
          }

          .stat-card.stat-projects::before { background: #8b5cf6; }
          .stat-card.stat-articles::before { background: #10b981; }
          .stat-card.stat-team::before { background: #ec4899; }
          .stat-card.stat-messages::before { background: #3b82f6; }

          .stat-card h4 {
            font-size: 0.8125rem;
            font-weight: 500;
            color: var(--text-muted);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.025em;
          }

          .stat-card .number {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--text);
            letter-spacing: -0.025em;
          }

          .stat-card .stat-footer {
            margin-top: 0.75rem;
            padding-top: 0.75rem;
            border-top: 1px solid var(--border-light);
            font-size: 0.8125rem;
            color: var(--text-muted);
          }

          .actions {
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }

          /* Badge */
          .badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 9999px;
          }

          .badge-success {
            background: var(--success-bg);
            color: #065f46;
          }

          .badge-warning {
            background: var(--warning-bg);
            color: #92400e;
          }

          .badge-danger {
            background: var(--danger-bg);
            color: #991b1b;
          }

          .badge-info {
            background: var(--info-bg);
            color: #1e40af;
          }

          /* Login page styles */
          .login-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          }

          .login-box {
            background: #fff;
            padding: 2.5rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            width: 100%;
            max-width: 400px;
          }

          .login-box h1 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--primary);
            font-size: 1.5rem;
            font-weight: 600;
          }

          .login-box .btn {
            width: 100%;
            padding: 0.75rem;
            font-size: 1rem;
          }

          /* Image upload component */
          .image-upload {
            border: 2px dashed var(--border);
            border-radius: var(--radius);
            padding: 1.5rem;
            text-align: center;
            transition: all 0.15s ease;
            background: var(--bg);
          }

          .image-upload:hover {
            border-color: var(--accent);
            background: var(--info-bg);
          }

          .image-upload.dragover {
            border-color: var(--accent);
            background: var(--info-bg);
          }

          .image-upload input[type="file"] {
            display: none;
          }

          .image-upload-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: var(--accent);
            color: #fff;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            font-size: 0.875rem;
            transition: all 0.15s ease;
          }

          .image-upload-btn:hover {
            background: var(--accent-hover);
          }

          .image-upload-text {
            color: var(--text-muted);
            margin-top: 0.75rem;
            font-size: 0.8125rem;
          }

          .image-preview {
            margin-top: 1rem;
            position: relative;
            display: inline-block;
          }

          .image-preview img {
            max-width: 200px;
            max-height: 200px;
            border-radius: var(--radius);
            border: 1px solid var(--border);
          }

          .image-preview-remove {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 24px;
            height: 24px;
            background: var(--danger);
            color: #fff;
            border: 2px solid #fff;
            border-radius: 50%;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow);
          }

          .image-upload-status {
            margin-top: 0.5rem;
            font-size: 0.8125rem;
            font-weight: 500;
          }

          .image-upload-status.uploading {
            color: var(--accent);
          }

          .image-upload-status.success {
            color: var(--success);
          }

          .image-upload-status.error {
            color: var(--danger);
          }

          /* HTML Editor styles */
          .html-editor {
            border: 1px solid var(--border);
            border-radius: var(--radius);
            overflow: hidden;
          }

          .html-editor-toolbar {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
            padding: 0.5rem;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
          }

          .html-editor-toolbar button {
            padding: 0.375rem 0.625rem;
            border: 1px solid var(--border);
            background: #fff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8125rem;
            min-width: 2rem;
            transition: all 0.15s ease;
          }

          .html-editor-toolbar button:hover {
            background: var(--accent);
            color: #fff;
            border-color: var(--accent);
          }

          .toolbar-sep {
            width: 1px;
            background: var(--border);
            margin: 0 0.25rem;
          }

          .html-editor-textarea {
            width: 100%;
            min-height: 200px;
            padding: 0.875rem;
            border: none;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.875rem;
            resize: vertical;
            box-sizing: border-box;
            line-height: 1.6;
          }

          .html-editor-preview {
            border-top: 1px solid var(--border);
            padding: 0.875rem;
            background: var(--bg);
          }

          .preview-label {
            font-size: 0.6875rem;
            font-weight: 600;
            color: var(--text-muted);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .preview-content {
            font-size: 0.875rem;
            line-height: 1.6;
          }

          .preview-content h2 {
            font-size: 1.25rem;
            margin: 0.5rem 0;
          }

          .preview-content h3 {
            font-size: 1.1rem;
            margin: 0.5rem 0;
          }

          .preview-content p {
            margin: 0.5rem 0;
          }

          .preview-content ul {
            margin: 0.5rem 0;
            padding-left: 1.5rem;
          }

          /* Empty state */
          .empty-state {
            text-align: center;
            padding: 3rem 2rem;
            color: var(--text-muted);
          }

          .empty-state-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
          }

          .empty-state h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text);
            margin-bottom: 0.5rem;
          }

          .empty-state p {
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
          }

          @media (max-width: 1024px) {
            .admin-sidebar {
              width: 220px;
            }
            .admin-main {
              margin-left: 220px;
            }
          }

          @media (max-width: 768px) {
            .admin-wrapper {
              flex-direction: column;
            }

            .admin-sidebar {
              position: relative;
              width: 100%;
              height: auto;
            }

            .sidebar-nav {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              padding: 0.75rem;
            }

            .nav-section {
              display: contents;
            }

            .nav-section-title {
              display: none;
            }

            .admin-sidebar nav a {
              flex: 1;
              text-align: center;
              min-width: fit-content;
              justify-content: center;
              padding: 0.5rem 0.75rem;
            }

            .nav-icon {
              display: none;
            }

            .sidebar-footer {
              display: none;
            }

            .admin-main {
              margin-left: 0;
            }

            .main-content {
              padding: 1rem;
            }

            .stats-grid {
              grid-template-columns: 1fr 1fr;
            }

            .form-row {
              grid-template-columns: 1fr;
            }
          }
        ` })] }), _jsx("body", { children: username ? (_jsxs("div", { class: "admin-wrapper", children: [_jsxs("aside", { class: "admin-sidebar", children: [_jsx("div", { class: "sidebar-header", children: _jsx("h1", { children: _jsxs("a", { href: "/admin", children: [_jsx("span", { class: "logo-icon", children: "CMS" }), "Admin"] }) }) }), _jsxs("div", { class: "sidebar-nav", children: [_jsxs("div", { class: "nav-section", children: [_jsx("div", { class: "nav-section-title", children: "Overview" }), _jsx("nav", { children: _jsxs("a", { href: "/admin", children: [_jsx("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }), "Dashboard"] }) })] }), _jsxs("div", { class: "nav-section", children: [_jsx("div", { class: "nav-section-title", children: "Content" }), _jsxs("nav", { children: [_jsxs("a", { href: "/admin/pages", children: [_jsx("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }), "Pages"] }), _jsxs("a", { href: "/admin/projects", children: [_jsx("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }), "Projects"] }), _jsxs("a", { href: "/admin/articles", children: [_jsx("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }), "Articles"] }), _jsxs("a", { href: "/admin/team", children: [_jsx("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }) }), "Team"] })] })] }), _jsxs("div", { class: "nav-section", children: [_jsx("div", { class: "nav-section-title", children: "System" }), _jsxs("nav", { children: [_jsxs("a", { href: "/admin/messages", children: [_jsx("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }), "Messages"] }), _jsxs("a", { href: "/admin/settings", children: [_jsxs("svg", { class: "nav-icon", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [_jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }), _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })] }), "Settings"] })] })] })] }), _jsxs("div", { class: "sidebar-footer", children: [_jsxs("div", { class: "user-card", children: [_jsx("div", { class: "user-avatar", children: username.charAt(0).toUpperCase() }), _jsxs("div", { class: "user-info", children: [_jsx("div", { class: "name", children: username }), _jsx("div", { class: "role", children: "Administrator" })] })] }), _jsx("form", { action: "/admin/logout", method: "post", children: _jsx("button", { type: "submit", class: "btn btn-sm", style: "width: 100%; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.1);", children: "Logout" }) })] })] }), _jsx("main", { class: "admin-main", children: _jsx("div", { class: "main-content", children: children }) })] })) : (_jsx(_Fragment, { children: children })) })] }));
};
//# sourceMappingURL=AdminLayout.js.map
import { Github, Blogger, Wechat, Mailgun, AzureAllResources  } from '@thesvg/react';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

function App() {
  return (
    <>
      <div className="homepage-container">
        <main className="content">
          <div className="avatar-container">
            <img src="/avatar.jpg" alt="Avatar" className="avatar" />
          </div>
          <div className="text-container">
            <h1 className="title">fanzong211.cn</h1>

            {/* 社交媒体与联系方式 */}
            <div className="social-links">
              <a
                href="https://github.com/zhoumowan"
                target="_blank"
                rel="noreferrer"
                className="social-icon github"
              >
                <Github width={22} height={22} fill="currentColor" />
                <span className="tooltip">GitHub</span>
              </a>
              <a
                href="https://wall.fanzong211.cn"
                target="_blank"
                rel="noreferrer"
                className="social-icon github-report"
              >
                <AzureAllResources  width={22} height={22} fill="currentColor" />
                <span className="tooltip">GitHub Report</span>
              </a>
              <a
                href="https://blog.fanzong211.cn"
                target="_blank"
                rel="noreferrer"
                className="social-icon blog"
              >
                <Blogger width={22} height={22} fill="currentColor" />
                <span className="tooltip">Blog</span>
              </a>
              <div className="social-icon wechat">
                <Wechat width={22} height={22} fill="currentColor" />
                <div className="tooltip qr-tooltip">
                  {/* 请将此处的 src 替换为你真实的微信二维码图片路径，例如 /wechat-qr.jpg */}
                  <img src="/wechat.jpg" alt="WeChat QR Code" className="qr-code" />
                </div>
              </div>
              <a href="mailto:fanzong211@126.com" className="social-icon email">
                <Mailgun width={22} height={22} fill="currentColor" />
                <span className="tooltip">fanzong211@126.com</span>
              </a>
            </div>
          </div>
        </main>
      </div>
      <Analytics />
    </>
  );
}

export default App;

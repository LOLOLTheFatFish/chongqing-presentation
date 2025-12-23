---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 304502206abcda1361bb54c775f3c85f05701f4e4d9ad71187cd706180d7111a0da600a9022100981a2f76dcf5a18f5ce3b0b7d9bd397f341da3f69c61805633f967e2dd87510a
    ReservedCode2: 3045022062a45998f405fb0698d23375ca9772d3c77900d559a580d49cc1ffc886a93f3f022100d0a7c340c79564d67eb9b6f6033edfac9a796024b0893c2ed330c82f7b0f5842
---

# 🌐 Vercel部署指南

## 📋 **部署概述**

本指南将帮助您将"重庆从网红到长红"演示网站部署到Vercel平台，享受全球CDN加速和自动HTTPS。

## ✨ **Vercel优势**

- 🚀 **全球CDN加速** - 快速访问世界各地
- 🔒 **自动HTTPS** - 免费SSL证书
- 🔄 **自动部署** - Git集成，自动更新
- 📊 **性能监控** - 详细的访问统计
- 🎯 **零配置** - 静态网站即开即用

## 🛠️ **部署前准备**

### **1. 创建Vercel账户**

1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub、GitLab或邮箱注册
3. 验证邮箱地址

### **2. 准备项目文件**

确保您的项目结构完整：
```
chongqing-presentation/
├── presentation.html          # 主入口文件
├── index.html                # 项目首页
├── audio/                    # 音频文件
├── slides/                   # 幻灯片
├── subtitles/                # 字幕数据
├── images/                   # 图片资源
├── vercel.json              # Vercel配置文件
└── package.json             # 项目配置（可选）
```

## 🚀 **部署方法**

### **方法一：Vercel CLI（推荐）**

#### **1. 安装Vercel CLI**
```bash
# 全局安装Vercel CLI
npm install -g vercel

# 登录Vercel
vercel login
```

#### **2. 部署项目**
```bash
# 进入项目目录
cd chongqing-presentation

# 部署到Vercel
vercel

# 按提示配置项目
? Set up and deploy "~/chongqing-presentation"? [Y/n] y
? Which scope do you want to deploy to? Your Personal Account
? Link to existing project? [y/N] n
? What's your project's name? chongqing-presentation
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

#### **3. 访问部署的网站**
部署完成后，Vercel会提供一个URL，例如：
- `https://chongqing-presentation.vercel.app`
- 或自定义域名

### **方法二：Git集成部署**

#### **1. 上传到Git仓库**
```bash
# 初始化Git仓库
git init

# 添加文件
git add .
git commit -m "Initial commit: Chongqing presentation"

# 推送到GitHub
git remote add origin https://github.com/yourusername/chongqing-presentation.git
git push -u origin main
```

#### **2. 连接Vercel**
1. 登录 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择您的Git仓库
4. 配置构建设置：
   - **Framework Preset**: Other
   - **Build Command**: 留空
   - **Output Directory**: ./
   - **Install Command**: 留空
5. 点击 "Deploy"

### **方法三：拖拽部署**

#### **1. 压缩项目文件夹**
将 `chongqing-presentation` 文件夹压缩为ZIP文件。

#### **2. 上传到Vercel**
1. 登录 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择 "Browse Template" 下方的 "Import"
4. 选择 "Deploy without Git"
5. 拖拽ZIP文件到上传区域
6. 配置项目名称和设置
7. 点击 "Deploy"

## ⚙️ **配置文件**

### **vercel.json 配置**

在项目根目录创建 `vercel.json` 文件：

```json
{
  "version": 2,
  "name": "chongqing-presentation",
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/",
      "dest": "/index.html"
    },
    {
      "src": "/presentation",
      "dest": "/presentation.html"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/audio/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/slides/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400"
        }
      ]
    },
    {
      "source": "/subtitles/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400"
        }
      ]
    }
  ]
}
```

### **package.json 配置（可选）**

```json
{
  "name": "chongqing-presentation",
  "version": "1.0.0",
  "description": "Chongqing: From Wanghong to Changhong - Academic Presentation",
  "main": "presentation.html",
  "scripts": {
    "dev": "serve -s . -l 8080",
    "build": "echo 'No build required for static site'",
    "start": "serve -s . -l 3000"
  },
  "keywords": [
    "chongqing",
    "presentation",
    "tourism",
    "academic"
  ],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "serve": "^14.0.0"
  }
}
```

## 🔧 **优化配置**

### **性能优化**

#### **1. 启用Gzip压缩**
Vercel默认启用，无需额外配置。

#### **2. 设置缓存头**
见上面的 `vercel.json` 配置，音频文件设置长期缓存。

#### **3. 启用HTTP/2**
Vercel默认支持HTTP/2。

### **SEO优化**

创建 `public/robots.txt`:
```
User-agent: *
Allow: /
```

创建 `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.vercel.app/</loc>
    <lastmod>2025-12-23</lastmod>
  </url>
  <url>
    <loc>https://your-domain.vercel.app/presentation.html</loc>
    <lastmod>2025-12-23</lastmod>
  </url>
</urlset>
```

### **自定义域名**

#### **1. 添加域名**
1. 在Vercel项目设置中点击 "Domains"
2. 输入您的域名，如 `chongqing-presentation.com`
3. 按提示配置DNS记录

#### **2. DNS配置**
```
类型: CNAME
名称: www
值: cname.vercel-dns.com

类型: A
名称: @
值: 76.76.19.61
```

## 📊 **监控与分析**

### **Vercel Analytics**
在项目设置中启用Vercel Analytics，查看：
- 页面访问量
- 用户地理分布
- 加载性能指标
- 错误统计

### **Google Analytics（可选）**
在 `presentation.html` 中添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 **自动部署**

### **Git工作流**
1. 修改本地文件
2. 提交到Git仓库
3. Vercel自动检测变更
4. 自动重新部署

### **手动部署**
```bash
# 重新部署
vercel --prod
```

## 🐛 **常见问题**

### **Q: 音频文件无法播放？**
**A:**
1. 检查音频文件路径是否正确
2. 确认音频文件已正确上传
3. 查看Vercel Function Logs

### **Q: 字幕不显示？**
**A:**
1. 确认字幕数据文件存在
2. 检查文件路径和权限
3. 查看浏览器控制台错误

### **Q: 页面404错误？**
**A:**
1. 检查路由配置
2. 确认文件路径正确
3. 查看Vercel部署日志

### **Q: 加载速度慢？**
**A:**
1. 优化音频文件大小
2. 启用Vercel缓存
3. 使用Vercel Edge Network

## 📈 **性能监控**

### **Vercel Dashboard**
- 查看部署历史
- 监控性能指标
- 管理域名和设置

### **Core Web Vitals**
Vercel自动监控：
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

## 🎯 **最佳实践**

### **1. 文件组织**
- 保持文件结构清晰
- 使用相对路径
- 避免深层目录嵌套

### **2. 性能优化**
- 压缩图片和音频文件
- 使用适当的缓存策略
- 启用懒加载（如果需要）

### **3. 安全性**
- 定期更新依赖
- 使用HTTPS
- 设置适当的安全头

### **4. 用户体验**
- 确保移动端兼容
- 优化加载速度
- 提供离线支持（可选）

## 📞 **技术支持**

### **Vercel支持**
- [Vercel文档](https://vercel.com/docs)
- [Vercel Discord](https://discord.gg/vercel)
- [Vercel支持](https://vercel.com/support)

### **部署检查清单**
- [ ] 项目文件完整
- [ ] vercel.json配置正确
- [ ] 域名DNS设置
- [ ] SSL证书自动生成
- [ ] 缓存策略配置
- [ ] 性能监控启用
- [ ] 错误处理配置

---

## 🎉 **部署完成！**

恭喜！您的"重庆从网红到长红"演示网站现已成功部署到Vercel，享受：
- ⚡ 全球CDN加速
- 🔒 自动HTTPS
- 📊 详细性能分析
- 🔄 零配置部署

**分享您的网站链接，让更多人看到您的学术成果！** 🌟

---
*Vercel部署指南 v1.0 - 2025年12月23日*

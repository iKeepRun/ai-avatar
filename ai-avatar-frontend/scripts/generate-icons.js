const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// 确保输出目录存在
const outputDir = path.join(__dirname, '../src/assets/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 图标配置
const icons = [
  { name: 'home', color: '#999999' },
  { name: 'home-active', color: '#07c160' },
  { name: 'history', color: '#999999' },
  { name: 'history-active', color: '#07c160' },
  { name: 'member', color: '#999999' },
  { name: 'member-active', color: '#07c160' },
  { name: 'upload', color: '#999999' },
  { name: 'logo', color: '#07c160' }
];

// 生成图标
async function generateIcons() {
  for (const icon of icons) {
    const canvas = createCanvas(48, 48);
    const ctx = canvas.getContext('2d');
    
    // 清空画布
    ctx.clearRect(0, 0, 48, 48);
    
    // 根据图标名称绘制不同的图标
    switch (icon.name) {
      case 'home':
      case 'home-active':
        // 绘制房子图标
        ctx.strokeStyle = icon.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(24, 8);
        ctx.lineTo(8, 20);
        ctx.lineTo(8, 40);
        ctx.lineTo(40, 40);
        ctx.lineTo(40, 20);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(16, 40);
        ctx.lineTo(16, 28);
        ctx.lineTo(32, 28);
        ctx.lineTo(32, 40);
        ctx.stroke();
        break;
        
      case 'history':
      case 'history-active':
        // 绘制历史图标
        ctx.strokeStyle = icon.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(24, 24, 16, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(24, 16);
        ctx.lineTo(24, 24);
        ctx.lineTo(30, 24);
        ctx.stroke();
        break;
        
      case 'member':
      case 'member-active':
        // 绘制会员图标
        ctx.strokeStyle = icon.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(24, 20, 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(24, 40, 12, Math.PI, Math.PI * 2);
        ctx.stroke();
        break;
        
      case 'upload':
        // 绘制上传图标
        ctx.strokeStyle = icon.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(24, 8);
        ctx.lineTo(24, 32);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(16, 16);
        ctx.lineTo(24, 8);
        ctx.lineTo(32, 16);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(8, 40);
        ctx.lineTo(40, 40);
        ctx.stroke();
        break;
        
      case 'logo':
        // 绘制logo
        ctx.fillStyle = icon.color;
        ctx.beginPath();
        ctx.arc(24, 24, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(24, 24, 10, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
    
    // 保存为PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(outputDir, `${icon.name}.png`), buffer);
    console.log(`Generated ${icon.name}.png`);
  }
}

generateIcons().catch(console.error); 
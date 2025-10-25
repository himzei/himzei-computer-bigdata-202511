// utils/generateIcons.ts
export const generateDataChartIcon = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  // 투명 배경
  ctx.clearRect(0, 0, 512, 512);

  // 그라디언트 설정
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#3b82f6'); // blue-500
  gradient.addColorStop(1, '#8b5cf6'); // purple-500

  // 막대 그래프 그리기
  ctx.fillStyle = gradient;

  // 첫 번째 막대
  ctx.fillRect(80, 280, 80, 180);

  // 두 번째 막대
  ctx.fillRect(200, 200, 80, 260);

  // 세 번째 막대
  ctx.fillRect(320, 150, 80, 310);

  // 글로우 효과
  ctx.shadowBlur = 30;
  ctx.shadowColor = '#8b5cf6';

  return canvas.toDataURL('image/png');
};

export const generateRocketIcon = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  ctx.clearRect(0, 0, 512, 512);

  // 그라디언트
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#a855f7'); // purple-500
  gradient.addColorStop(1, '#ec4899'); // pink-500

  ctx.fillStyle = gradient;

  // 로켓 본체
  ctx.beginPath();
  ctx.moveTo(256, 50);
  ctx.lineTo(300, 300);
  ctx.lineTo(256, 280);
  ctx.lineTo(212, 300);
  ctx.closePath();
  ctx.fill();

  // 로켓 날개 (왼쪽)
  ctx.beginPath();
  ctx.moveTo(212, 300);
  ctx.lineTo(150, 400);
  ctx.lineTo(212, 350);
  ctx.closePath();
  ctx.fill();

  // 로켓 날개 (오른쪽)
  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(362, 400);
  ctx.lineTo(300, 350);
  ctx.closePath();
  ctx.fill();

  // 불꽃
  ctx.fillStyle = '#fbbf24'; // amber-400
  ctx.beginPath();
  ctx.moveTo(236, 320);
  ctx.lineTo(256, 420);
  ctx.lineTo(276, 320);
  ctx.closePath();
  ctx.fill();

  ctx.shadowBlur = 40;
  ctx.shadowColor = '#ec4899';

  return canvas.toDataURL('image/png');
};

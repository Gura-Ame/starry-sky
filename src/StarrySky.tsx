import React, { useEffect, useRef } from 'react';
import './starry-sky.css';
import bgTree from './images/bgTree.png'
import bgMoon from './images/bgMoon.png'

interface StarrySkyProps {
  /** 星星數量 */
  starCount?: number;
  /** 流星出現間隔範圍 (毫秒) */
  meteorInterval?: [number, number];
  /** 是否顯示月亮 */
  showMoon?: boolean;
  /** 是否顯示森林背景 */
  showForest?: boolean;
  /** 森林圖片路徑 */
  forestImageSrc?: string;
  /** 月亮紋理圖片路徑 */
  moonTextureSrc?: string;
  /** 自定義樣式類名 */
  className?: string;
  /** 容器樣式 */
  style?: React.CSSProperties;
}

const StarrySky: React.FC<StarrySkyProps> = ({
  starCount = 458,
  meteorInterval = [24000, 30000],
  showMoon = true,
  showForest = true,
  forestImageSrc = bgTree,
  moonTextureSrc = bgMoon,
  className = "",
  style = {}
}) => {
  const constellationRef = useRef<HTMLDivElement>(null);
  const meteorShowerRef = useRef<HTMLDivElement>(null);
  const meteorTimeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const styleClasses = ["style1", "style2", "style3", "style4"];
    const sizeClasses = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    const opacityClasses = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

    function getRandomArbitrary(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const constellation = constellationRef.current;
    if (!constellation) return;

    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;
    const diagonal = Math.ceil(Math.sqrt(widthWindow * widthWindow + heightWindow * heightWindow));

    // 設定星座容器為正方形，中心對齊視窗
    constellation.style.width = `${diagonal}px`;
    constellation.style.height = `${diagonal}px`;

    // 生成星星
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < starCount; i++) {
      const span = document.createElement('span');
      span.className = `estrela ${styleClasses[getRandomArbitrary(0, 4)]} ${opacityClasses[getRandomArbitrary(0, 6)]} ${sizeClasses[getRandomArbitrary(0, 5)]}`;
      span.style.animationDelay = `.${getRandomArbitrary(0, 9)}s`;
      span.style.left = `${getRandomArbitrary(0, diagonal)}px`;
      span.style.top = `${getRandomArbitrary(0, diagonal)}px`;
      fragment.appendChild(span);
    }
    constellation.innerHTML = '';
    constellation.appendChild(fragment);

    // 流星雨邏輯
    let nextMeteorTimeout = getRandomArbitrary(meteorInterval[0], meteorInterval[1]);
    
    function loadMeteor() {
      const meteorShower = meteorShowerRef.current;
      if (meteorShower) {
        const meteor = document.createElement('div');
        meteor.className = `meteoro ${styleClasses[getRandomArbitrary(0, 4)]}`;
        meteorShower.appendChild(meteor);
        
        // 1秒後移除流星
        setTimeout(() => {
          if (meteor.parentNode) meteor.parentNode.removeChild(meteor);
        }, 1000);
      }
      
      // 設定下一次流星
      nextMeteorTimeout = getRandomArbitrary(meteorInterval[0], meteorInterval[1]);
      meteorTimeoutRef.current = setTimeout(loadMeteor, nextMeteorTimeout);
    }

    // 開始流星雨
    meteorTimeoutRef.current = setTimeout(loadMeteor, nextMeteorTimeout);

    // 清理函數
    return () => {
      if (meteorTimeoutRef.current) {
        clearTimeout(meteorTimeoutRef.current);
      }
    };
  }, [starCount, meteorInterval]);

  // 組件卸載時清理
  useEffect(() => {
    return () => {
      if (meteorTimeoutRef.current) {
        clearTimeout(meteorTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`starry-sky-container ${className}`} style={style}>
      <div className="noite"></div>
      <div className="constelacao" ref={constellationRef}></div>
      {showMoon && (
        <div className="lua">
          {moonTextureSrc && <div className="textura" style={{backgroundImage: `url(${moonTextureSrc})`}}></div>}
        </div>
      )}
      <div className="chuvaMeteoro" ref={meteorShowerRef}></div>
      {showForest && (
        <div className="floresta">
          <img src={forestImageSrc} alt="Forest silhouette" />
        </div>
      )}
    </div>
  );
};

export default StarrySky;
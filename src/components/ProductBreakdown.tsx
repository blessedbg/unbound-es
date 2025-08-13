import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Zap } from 'lucide-react';
import CTAButton from './CTAButton';
import EarlyAccessBadge from './EarlyAccessBadge';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Remove any dash in “in your body — and in”
  const part4Clean = t('hero.subtitle.part4').replace(/\s*[—–-]\s*/g, ' ');

  // Minimal YouTube embed (EN UI/captions), autoplay + best-effort sound
  const videoId = 'AHiT-tIk1uM';
  const videoSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videoId}` +
    `&playsinline=1&controls=0&modestbranding=1&rel=0` +
    `&cc_load_policy=1&cc_lang_pref=en&hl=en&enablejsapi=1`;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Try to unmute after autoplay starts (some browsers will still keep it muted)
  useEffect(() => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const post = (func: string, args: any[] = []) =>
      win.postMessage(JSON.stringify({ event: 'command', func, args }), '*');

    const t1 = setTimeout(() => {
      post('playVideo');
      post('unMute');
      post('setVolume', [100]);
    }, 600);

    return () => clearTimeout(t1);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
      {/* Background elements (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-float delay-2000"></div>
      </div>

      {/* Tighter top/bottom padding so video is visible sooner, but still clear of sticky header */}
      <div className="relative max-w-7xl mx-auto px-4 pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="text-center space-y-6 mb-6">
          {/* Early Access Badge */}
          <div className="flex justify-center">
            <EarlyAccessBadge />
          </div>

          {/* Main Headline — your exact wording */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight md:leading-[1.15] tracking-tight max-w-5xl md:max-w-6xl mx-auto">
            {i18n.language === 'en' ? (
              <>
                You keep choosing the <span className="text-accent font-semibold">pain</span> you{' '}
                <span className="text-accent font-semibold">recognize</span>.<br />
                Let&apos;s <span className="text-accent font-semibold">change</span> that.
              </>
            ) : (
              <>
                Sigues eligiendo el <span className="text-accent font-semibold">dolor</span> que{' '}
                <span className="text-accent font-semibold">conoces</span>.<br />
                Cambiemos <span className="text-accent font-semibold">eso</span>.
              </>
            )}
          </h1>

          {/* Subtitle — gradient ONLY on Break / Rewire / Build */}
          <div className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed max-w-5xl mx-auto space-y-2 text-gray-700 [&_*]:text-gray-700">
            <p>
              <span className="font-bold text-gradient">{t('hero.subtitle.part1')}</span>
              <span>{t('hero.subtitle.part2')}</span>
              <span className="font-bold text-gradient">{t('hero.subtitle.rewires')}</span>
              <span>{t('hero.subtitle.part3')}</span>
            </p>
            <p>
              <span className="font-bold text-gradient">Build</span>{' '}
              <span className="font-bold">{t('hero.subtitle.selfTrust')}</span>
              <span>{part4Clean}</span>
              <span className="font-bold">{t('hero.subtitle.safeLove')}</span>
              <span>{t('hero.subtitle.part5')}</span>
            </p>
          </div>
        </div>

        {/* Video — slightly narrower so it fits above the fold more often */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <iframe
                ref={iframeRef}
                width="1152"
                height="648"
                style={{ maxWidth: '100%', height: 'auto', aspectRatio: '16 / 9', border: 0 }}
                src={videoSrc}
                title="Unbound VSL (EN)"
                frameBorder={0}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Compact caption row */}
          <div className="text-center mt-3 space-y-1">
            <p className="text-sm text-gray-600">{t('hero.captionsAvailable')}</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <span className="w-3 h-2 bg-red-500 rounded-sm" />
                <span className="text-gray-600">{t('hero.english')}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-2 bg-yellow-500 rounded-sm" />
                <span className="text-gray-600">{t('hero.spanish')}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Single primary CTA — centered */}
        <div className="text-center">
          <CTAButton
            text={t('stickyButton')}
            className="btn-lg px-9 md:px-11 py-3.5 md:py-4 text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300"
          />
        </div>

        {/* Trust chips — one place only, non-clickable */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 cursor-default select-none">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.guarantee')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 cursor-default select-none">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.instantAccess')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 cursor-default select-none">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.scienceBased')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

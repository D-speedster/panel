import {
    LuSquare,
    LuRectangleHorizontal,
    LuRectangleVertical,
} from 'react-icons/lu'
import { TbRectangle, TbBan } from 'react-icons/tb'

export const aspectRatioOptions = [
    {
        label: 'چشم‌انداز (4:3)',
        value: 'lanscape',
        icon: <TbRectangle />,
        isIcon: true,
    },
    {
        label: 'پرتره (9:16)',
        value: 'portrait',
        icon: <LuRectangleVertical />,
        isIcon: true,
    },
    {
        label: 'مربع (1:1)',
        value: 'square',
        icon: <LuSquare />,
        isIcon: true,
    },
    {
        label: 'وایداسکرین (16:9)',
        value: 'widescreen',
        icon: <LuRectangleHorizontal />,
        isIcon: true,
    },
]

export const styleOptions = [
    { label: 'بدون سبک', value: 'noStyle', icon: <TbBan />, isIcon: true },
    { label: 'سه‌بعدی', value: 'd3', image: '/admin-panel/img/thumbs/styles/3d.jpg' },
    { label: 'انیمه', value: 'anime', image: '/admin-panel/img/thumbs/styles/anime.jpg' },
    {
        label: 'هنر دیجیتال',
        value: 'digitalArt',
        image: '/admin-panel/img/thumbs/styles/digital-art.jpg',
    },
    {
        label: 'فانتزی',
        value: 'fantasy',
        image: '/admin-panel/img/thumbs/styles/fantasy.jpg',
    },
    {
        label: 'فوتوریستی',
        value: 'futuristic',
        image: '/admin-panel/img/thumbs/styles/futuristic.jpg',
    },
    {
        label: 'هندسی',
        value: 'geometric',
        image: '/admin-panel/img/thumbs/styles/geometric.jpg',
    },
    {
        label: 'مینیمالیستی',
        value: 'minimalist',
        image: '/admin-panel/img/thumbs/styles/minimalist.jpg',
    },
    {
        label: 'نقاشی',
        value: 'painting',
        image: '/admin-panel/img/thumbs/styles/painting.jpg',
    },
    {
        label: 'طراحی با مداد',
        value: 'pencilDrawing',
        image: '/admin-panel/img/thumbs/styles/pencil-drawing.jpg',
    },
    { label: 'پیکسل', value: 'pixel', image: '/admin-panel/img/thumbs/styles/pixel.jpg' },
]

export const toneOptions = [
    { label: 'بدون تن', value: 'noTone', icon: <TbBan />, isIcon: true },
    {
        label: 'سیاه و سفید',
        value: 'blackAndWhite',
        image: '/admin-panel/img/thumbs/tone/black-and-white.jpg',
    },
    {
        label: 'تن سرد',
        value: 'coolTone',
        image: '/admin-panel/img/thumbs/tone/cool-tone.jpg',
    },
    { label: 'طلایی', value: 'golden', image: '/admin-panel/img/thumbs/tone/golden.jpg' },
    {
        label: 'رنگ ملایم',
        value: 'mutedColor',
        image: '/admin-panel/img/thumbs/tone/muted-color.jpg',
    },
    { label: 'پاستل', value: 'pastel', image: '/admin-panel/img/thumbs/tone/pastel.jpg' },
    {
        label: 'تن گرم',
        value: 'warmTone',
        image: '/admin-panel/img/thumbs/tone/warm-tone.jpg',
    },
]

export const lightingOptions = [
    {
        label: 'بدون نورپردازی',
        value: 'noLighting',
        icon: <TbBan />,
        isIcon: true,
    },
    {
        label: 'نورپردازی پشت',
        value: 'backLighting',
        image: '/admin-panel/img/thumbs/lighting/back-lighting.jpg',
    },
    {
        label: 'دراماتیک',
        value: 'dramatic',
        image: '/admin-panel/img/thumbs/lighting/dramatic.jpg',
    },
    {
        label: 'ساعت طلایی',
        value: 'goldenHour',
        image: '/admin-panel/img/thumbs/lighting/golden-hour.jpg',
    },
    { label: 'سخت', value: 'harsh', image: '/admin-panel/img/thumbs/lighting/harsh.jpg' },
    {
        label: 'نوردهی طولانی',
        value: 'longExpose',
        image: '/admin-panel/img/thumbs/lighting/long-expose.jpg',
    },
    {
        label: 'نور کم',
        value: 'lowLight',
        image: '/admin-panel/img/thumbs/lighting/low-light.jpg',
    },
    {
        label: 'نوردهی چندگانه',
        value: 'multiExpose',
        image: '/admin-panel/img/thumbs/lighting/multi-expose.jpg',
    },
    {
        label: 'استودیو',
        value: 'studio',
        image: '/admin-panel/img/thumbs/lighting/studio.jpg',
    },
    {
        label: 'سورئال',
        value: 'sunreal',
        image: '/admin-panel/img/thumbs/lighting/sunreal.jpg',
    },
]

export const cameraOptions = [
    { label: 'بدون دوربین', value: 'noCamera', icon: <TbBan />, isIcon: true },
    {
        label: 'نمای نزدیک',
        value: 'closeUp',
        image: '/admin-panel/img/thumbs/camera/close-up.jpg',
    },
    {
        label: 'جزئیات',
        value: 'detailed',
        image: '/admin-panel/img/thumbs/camera/detailed.jpg',
    },
    {
        label: 'چشم‌انداز',
        value: 'landscape',
        image: '/admin-panel/img/thumbs/camera/landscape.jpg',
    },
    {
        label: 'عکس از بالا',
        value: 'shotFromAbove',
        image: '/admin-panel/img/thumbs/camera/shot-from-above.jpg',
    },
    {
        label: 'عکس از پایین',
        value: 'shotFromBelow',
        image: '/admin-panel/img/thumbs/camera/shot-from-below.jpg',
    },
    {
        label: 'از طریق پنجره',
        value: 'throughWindow',
        image: '/admin-panel/img/thumbs/camera/through-window.jpg',
    },
    {
        label: 'زاویه باز',
        value: 'wideAngle',
        image: '/admin-panel/img/thumbs/camera/wide-angle.jpg',
    },
]

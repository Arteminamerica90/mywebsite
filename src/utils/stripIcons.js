const ICON_RE = /[\p{Extended_Pictographic}\uFE0F\u200D]/gu;

export function stripIcons(value) {
    if (typeof value !== 'string') return value;
    return value.replace(ICON_RE, '').replace(/\s{2,}/g, ' ').trim();
}

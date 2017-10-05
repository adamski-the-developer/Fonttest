/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'm-icon-bars': '&#xf0c9;',
		'm-icon-navicon': '&#xf0c9;',
		'm-icon-reorder': '&#xf0c9;',
		'm-icon-search': '&#xf003;',
		'm-icon-Asset-5': '&#xf0c4;',
		'm-icon-shopping-cart': '&#xe902;',
		'm-icon-heart': '&#xf004;',
		'm-icon-fb-logo-03': '&#xf090;',
		'm-icon-twitter': '&#xf099;',
		'm-icon-facebook': '&#xf09a;',
		'm-icon-facebook-f': '&#xf09a;',
		'm-icon-angle-left': '&#xf104;',
		'm-icon-angle-right': '&#xf105;',
		'm-icon-angle-up': '&#xf106;',
		'm-icon-angle-down': '&#xf107;',
		'm-icon-google': '&#xf1a0;',
		'm-icon-pinterest-p': '&#xf231;',
		'm-icon-vimeo': '&#xf27d;',
		'm-icon-angle-double-up': '&#xf102;',
		'm-icon-angle-double-down': '&#xf103;',
		'm-icon-play-circle': '&#xf220;',
		'm-icon-pause-circle': '&#xf221;',
		'm-icon-stop-circle': '&#xf22a;',
		'm-icon-markunread': '&#xf159;',
		'm-icon-close': '&#xf900;',
		'm-icon-skip_next': '&#xf224;',
		'm-icon-unfold_less': '&#xf5d6;',
		'm-icon-unfold_more': '&#xf5d7;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/m-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

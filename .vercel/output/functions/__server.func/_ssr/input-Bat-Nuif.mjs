import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { m as useRouterState, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as House, T as FileText, u as Settings, y as List } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var UNIT_LABEL = {
	piece: "عدد",
	meter: "متر",
	m2: "متر مربع",
	line: "خط",
	pair: "زوج",
	day: "روز",
	hour: "ساعت",
	device: "دستگاه",
	set: "ست",
	session: "جلسه",
	service: "سرویس"
};
/** نرخنامه به ریال است؛ داخل اپ همه قیمت‌ها تومان (ریال ÷ ۱۰) ذخیره می‌شود. */
var SHOLE = 36e4;
var SHOLE_CEILING = 5e5;
var AREA_M2 = 45e4;
var AREA_CEILING_M2 = 63e4;
var DAILY_MASTER = 3e6;
var VISIT_FEE = 75e4;
var CATEGORIES = [
	{
		id: "box",
		title: "قوطی و تابلو",
		subtitle: "قوطی، فریم، جعبه تقسیم",
		icon: "box"
	},
	{
		id: "conduit",
		title: "لوله‌کشی",
		subtitle: "PVC، خرطومی، فولادی",
		icon: "pipe"
	},
	{
		id: "wire",
		title: "سیم‌کشی",
		subtitle: "داخل لوله، همه مقاطع",
		icon: "cable"
	},
	{
		id: "cable",
		title: "کابل‌کشی",
		subtitle: "برق، شبکه، فیبر، HDMI",
		icon: "unplug"
	},
	{
		id: "panel",
		title: "سربندی تابلو",
		subtitle: "مینیاتوری، نشت جریان",
		icon: "panel"
	},
	{
		id: "light",
		title: "چراغ و لاین",
		subtitle: "توکار، روکار، ریسه",
		icon: "light"
	},
	{
		id: "intercom",
		title: "آیفون و آنتن",
		subtitle: "صوتی، تصویری، تلفن",
		icon: "phone"
	},
	{
		id: "earthing",
		title: "ارت و هم‌بندی",
		subtitle: "چاه ارت، ستون، فنداسیون",
		icon: "shield"
	},
	{
		id: "hardware",
		title: "ادوات",
		subtitle: "بست، راد، سوراخکاری کناف",
		icon: "hammer"
	},
	{
		id: "facade",
		title: "نما و بازدید",
		subtitle: "نورپردازی نما، حق ویزیت",
		icon: "camera"
	},
	{
		id: "map",
		title: "نقشه و خط‌کشی",
		subtitle: "تراز و ازبیلت",
		icon: "ruler"
	},
	{
		id: "daily",
		title: "روزمزد",
		subtitle: "استادکار طبق نرخنامه",
		icon: "clock"
	}
];
var DEFAULT_FEATURED = [
	"box",
	"conduit",
	"wire",
	"cable",
	"panel",
	"light",
	"intercom",
	"earthing"
];
var ITEMS = [
	{
		id: "i01",
		categoryId: "map",
		title: "اجرای خط‌کشی تراز روی دیوار",
		unit: "meter",
		price: 75e3
	},
	{
		id: "i02",
		categoryId: "map",
		title: "تهیه نقشه ازبیلت دستی روی معماری",
		unit: "m2",
		price: 1e5
	},
	{
		id: "i03",
		categoryId: "box",
		title: "قوطی‌گذاری روی سطوح جهت کلید و پریز",
		unit: "piece",
		price: 75e3
	},
	{
		id: "i04",
		categoryId: "box",
		title: "قوطی‌گذاری در کناف جهت کلید و پریز",
		unit: "piece",
		price: 75e3
	},
	{
		id: "i05",
		categoryId: "box",
		title: "نصب فریم گچی چراغ",
		unit: "piece",
		price: 6e4
	},
	{
		id: "i06",
		categoryId: "box",
		title: "نصب تابلو ۱ ردیفه ۱۲ فیدر",
		unit: "piece",
		price: Math.round(1.5 * SHOLE),
		note: "معادل ۱٫۵ شعله"
	},
	{
		id: "i07",
		categoryId: "box",
		title: "نصب تابلو ۲ ردیفه ۲۴ فیدر",
		unit: "piece",
		price: 3 * SHOLE,
		note: "معادل ۳ شعله"
	},
	{
		id: "i08",
		categoryId: "box",
		title: "نصب تابلو ۳ ردیفه ۳۶ فیدر",
		unit: "piece",
		price: 4 * SHOLE,
		note: "معادل ۴ شعله"
	},
	{
		id: "i09",
		categoryId: "box",
		title: "نصب جعبه تقسیم روکار فلزی و PVC",
		unit: "piece",
		price: 15e4,
		note: "بدون بوشن و براس‌بوش"
	},
	{
		id: "i10",
		categoryId: "box",
		title: "نصب فریم تابلو توکار تا ۵۱×۵۱ سانتی‌متر",
		unit: "piece",
		price: 225e3,
		note: "بدون تخریب"
	},
	{
		id: "i11",
		categoryId: "box",
		title: "نصب فریم تابلو توکار تا ۱×۱ متر",
		unit: "piece",
		price: 4e5,
		note: "بدون تخریب"
	},
	{
		id: "i12",
		categoryId: "box",
		title: "نصب فریم تابلو توکار تا ۱٫۵×۱٫۵ متر",
		unit: "piece",
		price: 525e3,
		note: "بدون تخریب"
	},
	{
		id: "i13",
		categoryId: "box",
		title: "نصب فریم تابلو توکار تا ۲×۲ متر",
		unit: "piece",
		price: 615e3,
		note: "بدون تخریب"
	},
	{
		id: "i14",
		categoryId: "box",
		title: "نصب تابلو تا سایز ۵۱×۵۱ سانتی‌متر",
		unit: "piece",
		price: 315e3,
		note: "بدون سربندی"
	},
	{
		id: "i15",
		categoryId: "box",
		title: "نصب تابلو تا سایز ۱×۱ متر",
		unit: "piece",
		price: 615e3,
		note: "بدون سربندی"
	},
	{
		id: "i16",
		categoryId: "box",
		title: "نصب تابلو تا سایز ۱٫۵×۱٫۵ متر",
		unit: "piece",
		price: 7e5,
		note: "بدون سربندی"
	},
	{
		id: "i17",
		categoryId: "box",
		title: "نصب تابلو تا سایز ۲×۲ متر",
		unit: "piece",
		price: 1e6,
		note: "بدون سربندی"
	},
	{
		id: "i18",
		categoryId: "box",
		title: "نصب فریم چراغ سیلندری تا ۹۱ میلی‌متر",
		unit: "piece",
		price: 3e4,
		note: "بدون تخریب"
	},
	{
		id: "i19",
		categoryId: "box",
		title: "نصب فریم چراغ سیلندری بیش از ۹۱ میلی‌متر",
		unit: "piece",
		price: 15e3,
		note: "بدون تخریب"
	},
	{
		id: "i20",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۲۰ میلی‌متر",
		unit: "meter",
		price: 62500
	},
	{
		id: "i21",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۲۵ میلی‌متر",
		unit: "meter",
		price: 69e3
	},
	{
		id: "i22",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۳۲ میلی‌متر",
		unit: "meter",
		price: 9e4
	},
	{
		id: "i23",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۴۰ میلی‌متر",
		unit: "meter",
		price: 105e3
	},
	{
		id: "i24",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۵۰ میلی‌متر",
		unit: "meter",
		price: 127500
	},
	{
		id: "i25",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۶۳ میلی‌متر",
		unit: "meter",
		price: 15e4
	},
	{
		id: "i26",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۹۰ میلی‌متر",
		unit: "meter",
		price: 225e3
	},
	{
		id: "i27",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۱۱۰ میلی‌متر",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i28",
		categoryId: "conduit",
		title: "لوله‌کشی توکار PVC سایز ۱۲۵ میلی‌متر",
		unit: "meter",
		price: 375e3
	},
	{
		id: "i29",
		categoryId: "conduit",
		title: "لوله‌کشی خرطومی نسوز تمامی سایزها",
		unit: "meter",
		price: 5e4
	},
	{
		id: "i30",
		categoryId: "conduit",
		title: "خرطومی فلزی (فلکسیبل) تا سایز ۱۳",
		unit: "meter",
		price: 5e4,
		note: "بدون بست"
	},
	{
		id: "i31",
		categoryId: "conduit",
		title: "خرطومی فلزی سایز ۱۶ تا ۲۵",
		unit: "meter",
		price: 6e4,
		note: "بدون بست"
	},
	{
		id: "i32",
		categoryId: "conduit",
		title: "خرطومی فلزی سایز ۲۹ و ۳۶",
		unit: "meter",
		price: 135e3,
		note: "بدون بست"
	},
	{
		id: "i33",
		categoryId: "conduit",
		title: "خرطومی فلزی سایز ۴۲ به بالا",
		unit: "meter",
		price: 15e4,
		note: "بدون بست"
	},
	{
		id: "i34",
		categoryId: "conduit",
		title: "لوله فولادی گالوانیزه PG ۱۱ و ۱۳٫۵",
		unit: "meter",
		price: 1e5,
		note: "به‌طور کامل"
	},
	{
		id: "i35",
		categoryId: "conduit",
		title: "لوله فولادی گالوانیزه PG ۱۶",
		unit: "meter",
		price: 11e4,
		note: "به‌طور کامل"
	},
	{
		id: "i36",
		categoryId: "conduit",
		title: "لوله فولادی گالوانیزه PG ۲۱",
		unit: "meter",
		price: 15e4,
		note: "به‌طور کامل"
	},
	{
		id: "i37",
		categoryId: "conduit",
		title: "لوله فولادی گالوانیزه PG ۲۹",
		unit: "meter",
		price: 15e4,
		note: "به‌طور کامل"
	},
	{
		id: "i38",
		categoryId: "conduit",
		title: "لوله فولادی گالوانیزه PG ۳۶",
		unit: "meter",
		price: 15e4,
		note: "به‌طور کامل"
	},
	{
		id: "i39",
		categoryId: "conduit",
		title: "لوله فولادی گالوانیزه PG ۴۲",
		unit: "meter",
		price: 2e5,
		note: "به‌طور کامل"
	},
	{
		id: "i40",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۱٫۵ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 3e4
	},
	{
		id: "i41",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۲٫۵ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 3e4
	},
	{
		id: "i42",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۴ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 4e4
	},
	{
		id: "i43",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۶ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 45e3
	},
	{
		id: "i44",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۱۰ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 5e4
	},
	{
		id: "i45",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۱۶ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 6e4
	},
	{
		id: "i46",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۲۵ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 6e4
	},
	{
		id: "i47",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۳۵ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 7e4
	},
	{
		id: "i48",
		categoryId: "wire",
		title: "سیم‌کشی مقطع ۵۰ و ۷۰ میلی‌متر مربع داخل لوله",
		unit: "meter",
		price: 13e4
	},
	{
		id: "i49",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۱ تا ۵×۱٫۵ داخل لوله",
		unit: "meter",
		price: 6e4
	},
	{
		id: "i50",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۲٫۵ تا ۵×۲٫۵ داخل لوله",
		unit: "meter",
		price: 7e4
	},
	{
		id: "i51",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۴ تا ۵×۴ داخل لوله",
		unit: "meter",
		price: 75e3
	},
	{
		id: "i52",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۶ تا ۵×۶ داخل لوله",
		unit: "meter",
		price: 9e4
	},
	{
		id: "i53",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۱۰ تا ۵×۱۰ داخل لوله",
		unit: "meter",
		price: 1e5
	},
	{
		id: "i54",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۱۶ تا ۵×۱۶ داخل لوله",
		unit: "meter",
		price: 11e4
	},
	{
		id: "i55",
		categoryId: "cable",
		title: "کابل‌کشی ۲×۲۵ تا ۵×۲۵ داخل لوله",
		unit: "meter",
		price: 13e4
	},
	{
		id: "i56",
		categoryId: "cable",
		title: "کابل‌کشی ۳×۳۵ تا ۵×۳۵ داخل لوله",
		unit: "meter",
		price: 2e5
	},
	{
		id: "i57",
		categoryId: "cable",
		title: "کابل‌کشی ۳×۵۰ و ۳×۵۰+۲۵ داخل لوله",
		unit: "meter",
		price: 23e4
	},
	{
		id: "i58",
		categoryId: "cable",
		title: "کابل‌کشی ۳×۷۰ داخل لوله",
		unit: "meter",
		price: 27e4
	},
	{
		id: "i59",
		categoryId: "cable",
		title: "کابل‌کشی ۳×۹۵+۵۰ داخل لوله",
		unit: "meter",
		price: 33e4
	},
	{
		id: "i61",
		categoryId: "cable",
		title: "کابل جریان ضعیف تا ۶ زوج داخل لوله",
		unit: "meter",
		price: 25e3
	},
	{
		id: "i62",
		categoryId: "cable",
		title: "هر زوج اضافه بر ۶ زوج داخل لوله",
		unit: "pair",
		price: 5e3
	},
	{
		id: "i63",
		categoryId: "cable",
		title: "کابل‌کشی CAT داخل لوله",
		unit: "meter",
		price: 3e4
	},
	{
		id: "i64",
		categoryId: "cable",
		title: "کابل کواکسیال، RG و صوت داخل لوله",
		unit: "meter",
		price: 3e4
	},
	{
		id: "i65",
		categoryId: "cable",
		title: "کابل‌کشی HDMI",
		unit: "meter",
		price: 5e4
	},
	{
		id: "i66",
		categoryId: "cable",
		title: "کابل فیبر نوری تا ۴ کر",
		unit: "meter",
		price: 42e3
	},
	{
		id: "i67",
		categoryId: "cable",
		title: "کابل فیبر نوری ۱۲ و ۲۴ کر",
		unit: "meter",
		price: 51e3
	},
	{
		id: "i68",
		categoryId: "cable",
		title: "کابل فیبر نوری ۴۸ کر",
		unit: "meter",
		price: 51e3
	},
	{
		id: "i69",
		categoryId: "cable",
		title: "کابل ترکیبی برق و تصویر داخل لوله",
		unit: "meter",
		price: 33e3
	},
	{
		id: "i70",
		categoryId: "cable",
		title: "اجرای نخ‌کشی داخل لوله",
		unit: "meter",
		price: 75e3
	},
	{
		id: "i71",
		categoryId: "panel",
		title: "نصب و سربندی مینیاتوری تک‌فاز",
		unit: "piece",
		price: 28e4,
		note: "با وایرشو و کابلشو؛ بدون لوله و سیم"
	},
	{
		id: "i72",
		categoryId: "panel",
		title: "نصب و سربندی مینیاتوری سه‌فاز",
		unit: "piece",
		price: 45e4,
		note: "با وایرشو و کابلشو؛ بدون لوله و سیم"
	},
	{
		id: "i73",
		categoryId: "panel",
		title: "نصب کلید نشت جریان تک‌فاز",
		unit: "piece",
		price: 525e3,
		note: "با وایرشو و کابلشو؛ بدون لوله و سیم"
	},
	{
		id: "i74",
		categoryId: "panel",
		title: "نصب کلید نشت جریان سه‌فاز",
		unit: "piece",
		price: 675e3,
		note: "با وایرشو و کابلشو؛ بدون لوله و سیم"
	},
	{
		id: "i75",
		categoryId: "panel",
		title: "سربندی خط تک‌فاز تا سایز ۶",
		unit: "line",
		price: 15e4,
		note: "فاز، نول، ارت"
	},
	{
		id: "i76",
		categoryId: "panel",
		title: "سربندی خط تک‌فاز سایز ۱۰ و ۱۶",
		unit: "line",
		price: 18e4,
		note: "فاز، نول، ارت"
	},
	{
		id: "i77",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز تا سایز ۶",
		unit: "line",
		price: 18e4,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i78",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز سایز ۱۰ و ۱۶",
		unit: "line",
		price: 25e4,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i79",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز سایز ۲۵ و ۳۵",
		unit: "line",
		price: 35e4,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i80",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز سایز ۵۰ و ۷۰",
		unit: "line",
		price: 45e4,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i81",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز سایز ۹۵ و ۱۲۰",
		unit: "line",
		price: 1e5,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i82",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز سایز ۱۵۰ و ۱۸۵",
		unit: "line",
		price: 13e4,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i83",
		categoryId: "panel",
		title: "سربندی خط سه‌فاز سایز ۲۴۰ و ۳۰۰",
		unit: "line",
		price: 18e5,
		note: "۳ فاز، نول، ارت"
	},
	{
		id: "i84",
		categoryId: "light",
		title: "نصب و سربندی لامپ و سرپیچ",
		unit: "piece",
		price: 1e5
	},
	{
		id: "i85",
		categoryId: "light",
		title: "چراغ توکار تا ۱۱۰ میلی‌متر",
		unit: "piece",
		price: 12e4,
		note: "با کانکتور؛ بدون لوله و سیم"
	},
	{
		id: "i86",
		categoryId: "light",
		title: "چراغ توکار ۱۱۵ تا ۳۱۰ میلی‌متر",
		unit: "piece",
		price: 225e3,
		note: "با کانکتور؛ بدون لوله و سیم"
	},
	{
		id: "i87",
		categoryId: "light",
		title: "چراغ توکار ۳۱۰ تا ۶۱۰ میلی‌متر",
		unit: "piece",
		price: 375e3,
		note: "با کانکتور؛ بدون لوله و سیم"
	},
	{
		id: "i88",
		categoryId: "light",
		title: "چراغ روکار تا ۱۱۰ میلی‌متر",
		unit: "piece",
		price: 3e5,
		note: "با کانکتور؛ بدون لوله و سیم"
	},
	{
		id: "i89",
		categoryId: "light",
		title: "چراغ روکار ۱۱۰ تا ۳۱۰ میلی‌متر",
		unit: "piece",
		price: 45e4,
		note: "با کانکتور؛ بدون لوله و سیم"
	},
	{
		id: "i90",
		categoryId: "light",
		title: "نصب شلنگی ۲۲۰ و ۱۲ ولت بدون چسب",
		unit: "meter",
		price: 6e4
	},
	{
		id: "i91",
		categoryId: "light",
		title: "نصب سوکت و ترانس شلنگی",
		unit: "piece",
		price: 5e4
	},
	{
		id: "i92",
		categoryId: "light",
		title: "نصب و سربندی ترانس و درایو ۱۲ ولت",
		unit: "piece",
		price: 3e5
	},
	{
		id: "i93",
		categoryId: "light",
		title: "چراغ دفنی و استخری با واترپروف",
		unit: "piece",
		price: 675e3
	},
	{
		id: "i94",
		categoryId: "light",
		title: "چراغ لاینی ۱ تا ۲ سانتی‌متر — تک ریسه",
		unit: "meter",
		price: 45e4,
		note: "بدون برش"
	},
	{
		id: "i95",
		categoryId: "light",
		title: "چراغ لاینی ۱ تا ۲ سانتی‌متر — دو ریسه",
		unit: "meter",
		price: 6e5,
		note: "بدون برش"
	},
	{
		id: "i96",
		categoryId: "light",
		title: "چراغ لاینی ۱ تا ۲ سانتی‌متر — سه ریسه",
		unit: "meter",
		price: 675e3,
		note: "بدون برش"
	},
	{
		id: "i97",
		categoryId: "light",
		title: "برش کناف جهت لاین نوری",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i98",
		categoryId: "light",
		title: "نصب لاین نوری در رابیتس",
		unit: "meter",
		price: 375e3
	},
	{
		id: "i99",
		categoryId: "light",
		title: "نصب لاین نوری در سرامیک",
		unit: "meter",
		price: 375e3
	},
	{
		id: "i100",
		categoryId: "light",
		title: "نصب چراغ ریلی",
		unit: "meter",
		price: Math.round(1.5 * SHOLE),
		note: "معادل ۱٫۵ شعله"
	},
	{
		id: "i101",
		categoryId: "light",
		title: "نصب ریموت کنترل روشنایی",
		unit: "piece",
		price: 675e3
	},
	{
		id: "i102",
		categoryId: "light",
		title: "نصب پروفیل لاین نوری به‌صورت انتظار",
		unit: "meter",
		price: 225e3,
		note: "بدون اجرای ریسه"
	},
	{
		id: "i103",
		categoryId: "light",
		title: "لاین نوری در کناف — یک لاین",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i104",
		categoryId: "light",
		title: "لاین نوری در کناف — دو لاین",
		unit: "meter",
		price: 55e4
	},
	{
		id: "i105",
		categoryId: "light",
		title: "لاین نوری در کناف — سه لاین",
		unit: "meter",
		price: 8e5
	},
	{
		id: "i106",
		categoryId: "light",
		title: "نصب تاج پشت‌سطحی لاین ۱۲ یا ۲۴ ولت",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i107",
		categoryId: "light",
		title: "نصب کلید لمسی ۱۲ ولت",
		unit: "piece",
		price: Math.round(1.5 * SHOLE),
		note: "معادل ۱٫۵ شعله"
	},
	{
		id: "i108",
		categoryId: "light",
		title: "نصب امپلی ۱۲ ولت",
		unit: "piece",
		price: Math.round(1.5 * SHOLE),
		note: "معادل ۱٫۵ شعله"
	},
	{
		id: "i109",
		categoryId: "light",
		title: "بلندگوی سقفی توکار و روکار تا ۳۱۱ میلی‌متر",
		unit: "piece",
		price: 25e4,
		note: "بدون لوله و کابل"
	},
	{
		id: "i110",
		categoryId: "light",
		title: "نصب پروفیل خطی بدون زاویه",
		unit: "meter",
		price: 33e4
	},
	{
		id: "i111",
		categoryId: "light",
		title: "نصب پروفیل به‌صورت فارسی‌بر",
		unit: "meter",
		price: 39e4
	},
	{
		id: "i115",
		categoryId: "light",
		title: "ریسه لاین نوری در کابینت و کمد",
		unit: "meter",
		price: 325e3
	},
	{
		id: "i116",
		categoryId: "light",
		title: "ریسه لاین نوری در رابیتس",
		unit: "meter",
		price: 325e3
	},
	{
		id: "i117",
		categoryId: "light",
		title: "ریسه لاین نوری در سرامیک",
		unit: "meter",
		price: 325e3
	},
	{
		id: "i118",
		categoryId: "light",
		title: "ریسه لاین نوری در کناف",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i119",
		categoryId: "light",
		title: "ریسه لاین نوری در نما",
		unit: "meter",
		price: 325e3
	},
	{
		id: "i120",
		categoryId: "light",
		title: "لاین نوری روکار خطی و زاویه‌دار",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i121",
		categoryId: "light",
		title: "لاین نوری روکار آویز",
		unit: "meter",
		price: 3e5
	},
	{
		id: "i122",
		categoryId: "light",
		title: "چشم الکترونیکی روکار و توکار با تنظیم",
		unit: "piece",
		price: 3e5
	},
	{
		id: "i123",
		categoryId: "light",
		title: "نصب و سربندی فتوسل",
		unit: "piece",
		price: 45e4
	},
	{
		id: "i124",
		categoryId: "light",
		title: "نصب و تنظیم ساعت نجومی",
		unit: "piece",
		price: 6e5
	},
	{
		id: "i125",
		categoryId: "light",
		title: "باز کردن کلیه نصبیات جهت تعویض یا تعمیر",
		unit: "piece",
		price: 12e4
	},
	{
		id: "i126",
		categoryId: "light",
		title: "چراغ آویز بدون مونتاژ و قلاب و زنجیر",
		unit: "piece",
		price: 18e4
	},
	{
		id: "i156",
		categoryId: "light",
		title: "نصب هالوژن با گردبر تا ۹ وات",
		unit: "piece",
		price: 255e3
	},
	{
		id: "i157",
		categoryId: "light",
		title: "نصب هالوژن از ۹ وات به بالا با گردبر",
		unit: "piece",
		price: 3e5
	},
	{
		id: "i127",
		categoryId: "intercom",
		title: "درب‌بازکن صوتی",
		unit: "device",
		price: 225e4,
		note: "بدون لوله و کابل‌کشی"
	},
	{
		id: "i128",
		categoryId: "intercom",
		title: "درب‌بازکن تصویری",
		unit: "device",
		price: 235e4,
		note: "بدون لوله و کابل‌کشی"
	},
	{
		id: "i129",
		categoryId: "intercom",
		title: "آنتن معمولی و مرکزی — راه‌اندازی",
		unit: "piece",
		price: 75e4,
		note: "بدون لوله و کابل‌کشی"
	},
	{
		id: "i130",
		categoryId: "intercom",
		title: "نصب آنتن معمولی",
		unit: "piece",
		price: 415e3
	},
	{
		id: "i131",
		categoryId: "intercom",
		title: "جعبه تلفن پیچی و کروز",
		unit: "pair",
		price: 6e4,
		note: "بدون لوله و کابل‌کشی"
	},
	{
		id: "i132",
		categoryId: "hardware",
		title: "نصب بست یک‌طرفه",
		unit: "piece",
		price: 45e3
	},
	{
		id: "i133",
		categoryId: "hardware",
		title: "نصب راد با انکربولت در سقف",
		unit: "piece",
		price: 15e4
	},
	{
		id: "i134",
		categoryId: "hardware",
		title: "نصب U چنل از ۱۰ تا ۱۰۰ سانتی‌متر",
		unit: "meter",
		price: 15e4
	},
	{
		id: "i135",
		categoryId: "hardware",
		title: "نصب بست چنگالی",
		unit: "piece",
		price: 3e4
	},
	{
		id: "i136",
		categoryId: "hardware",
		title: "سوراخکاری کناف جهت چراغ توکار تا ۱۰۰ میلی‌متر",
		unit: "piece",
		price: 6e4
	},
	{
		id: "i137",
		categoryId: "hardware",
		title: "سوراخکاری کناف جهت چراغ توکار ۱۰۵ تا ۳۰۰ میلی‌متر",
		unit: "piece",
		price: 9e4
	},
	{
		id: "i138",
		categoryId: "earthing",
		title: "اتصال سیم ارت به فنداسیون برای تابلو موقت",
		unit: "service",
		price: 8e5
	},
	{
		id: "i139",
		categoryId: "earthing",
		title: "هم‌بندی ستون‌های بین طبقات بدون صفحه فلزی",
		unit: "service",
		price: 3e5
	},
	{
		id: "i140",
		categoryId: "earthing",
		title: "هم‌بندی ستون‌های بین طبقات با صفحه فلزی",
		unit: "service",
		price: 36e4
	},
	{
		id: "i141",
		categoryId: "earthing",
		title: "هم‌بندی فنداسیون و خرپشته تا ۵۰ متر مربع",
		unit: "service",
		price: 165e4
	},
	{
		id: "i142",
		categoryId: "earthing",
		title: "هم‌بندی فنداسیون و سقف آخر تا ۲۰۰ متر مربع",
		unit: "service",
		price: 36e5
	},
	{
		id: "i143",
		categoryId: "earthing",
		title: "هم‌بندی بالای ۲۰۰ متر مربع — هر متر اضافه",
		unit: "m2",
		price: 29e3
	},
	{
		id: "i144",
		categoryId: "earthing",
		title: "هم‌بندی سقف‌های بین طبقات",
		unit: "service",
		price: 29e5
	},
	{
		id: "i145",
		categoryId: "earthing",
		title: "انشعابات تابلو هم‌بندی اصلی و ارتینگ",
		unit: "service",
		price: 29e5
	},
	{
		id: "i146",
		categoryId: "earthing",
		title: "ارت موقت و برق اتاقک نگهبانی قبل از فنداسیون",
		unit: "service",
		price: 12e5
	},
	{
		id: "i147",
		categoryId: "earthing",
		title: "هم‌بندی اضافی واحدی",
		unit: "service",
		price: 24e5
	},
	{
		id: "i148",
		categoryId: "earthing",
		title: "اجرای چاه ارت صفحه‌ای",
		unit: "device",
		price: 375e4,
		note: "حفر و پر کردن چاه با کارفرما"
	},
	{
		id: "i149",
		categoryId: "earthing",
		title: "اجرای چاه ارت الکترومیله‌ای",
		unit: "device",
		price: 375e4,
		note: "حفر و پر کردن چاه با کارفرما"
	},
	{
		id: "i150",
		categoryId: "earthing",
		title: "اجرای چاه ارت حلقوی با رعایت استاندارد",
		unit: "device",
		price: 12e5,
		note: "حفر و پر کردن چاه با کارفرما"
	},
	{
		id: "i151",
		categoryId: "earthing",
		title: "زدن میله ارت همراه با دریچه بازدید",
		unit: "device",
		price: 12e5
	},
	{
		id: "i152",
		categoryId: "facade",
		title: "نورپردازی نما تا ۳ سقف — هر قطعه",
		unit: "piece",
		price: 75e4,
		note: "سیم‌کشی، ترمینال و وارنیش"
	},
	{
		id: "i153",
		categoryId: "facade",
		title: "نورپردازی نما از ۳ تا ۶ سقف — هر قطعه",
		unit: "piece",
		price: 1125e3,
		note: "سیم‌کشی، ترمینال و وارنیش"
	},
	{
		id: "i154",
		categoryId: "facade",
		title: "نورپردازی نما از ۶ سقف به بالا — هر قطعه",
		unit: "piece",
		price: 15e5,
		note: "سیم‌کشی، ترمینال و وارنیش"
	},
	{
		id: "i155",
		categoryId: "facade",
		title: "حق ویزیت برقکار از هر پروژه",
		unit: "session",
		price: VISIT_FEE
	},
	{
		id: "i-day",
		categoryId: "daily",
		title: "استادکار ماهر روزمزد",
		unit: "day",
		price: DAILY_MASTER,
		note: "طبق بند ۱۶ نرخنامه؛ تأیید کارفرما"
	},
	{
		id: "i-hour",
		categoryId: "daily",
		title: "استادکار ساعتی",
		unit: "hour",
		price: 4e5
	}
];
var QUICK_RATES = {
	residentialM2: AREA_M2,
	officeM2: AREA_M2,
	commercialM2: AREA_M2,
	areaM2: AREA_M2,
	areaCeilingM2: AREA_CEILING_M2,
	shole: SHOLE,
	sholeCeiling: SHOLE_CEILING,
	dailyMaster: DAILY_MASTER
};
var SHOLE_RULES = [
	"سیستم اعلام و اطفاء حریق: هر قطعه یک شعله",
	"کلید تک‌پل، تبدیل، پریز ارت‌دار، شاسی زنگ، ملودی، مینیاتوری، چشم، پریز آنتن و تلفن: هر کدام یک شعله",
	"کلید دوپل و پریز تلفن دوخط: هر کدام دو شعله",
	"کلید سه‌پل و بیشتر: هر پل یک شعله",
	"لوله و کابل دوربین و اعلام سرقت جداگانه و آیتمی حساب می‌شود"
];
function itemsByCategory(id) {
	return ITEMS.filter((item) => item.categoryId === id);
}
function findCategory(id) {
	return CATEGORIES.find((c) => c.id === id);
}
var useCalc = create()(persist((set, get) => ({
	priceOverrides: {},
	customItems: [],
	featuredIds: [...DEFAULT_FEATURED],
	coefficient: 1,
	discountPercent: 0,
	customerName: "",
	projectName: "",
	notes: "",
	cart: [],
	estimates: [],
	setQty: (itemId, qty) => set((s) => {
		const next = Math.max(0, qty);
		const rest = s.cart.filter((l) => l.itemId !== itemId);
		return { cart: next === 0 ? rest : [...rest, {
			itemId,
			qty: next
		}] };
	}),
	addQty: (itemId, delta) => {
		const current = get().cart.find((l) => l.itemId === itemId)?.qty ?? 0;
		get().setQty(itemId, current + delta);
	},
	clearCart: () => set({
		cart: [],
		customerName: "",
		projectName: "",
		notes: "",
		discountPercent: 0
	}),
	setOverride: (itemId, price) => set((s) => {
		const next = { ...s.priceOverrides };
		if (price === null || !Number.isFinite(price)) delete next[itemId];
		else next[itemId] = Math.max(0, Math.round(price));
		return { priceOverrides: next };
	}),
	addCustomItem: (item) => {
		const id = `custom-${Date.now()}`;
		set((s) => ({ customItems: [...s.customItems, {
			...item,
			id
		}] }));
		return id;
	},
	removeCustomItem: (id) => set((s) => ({
		customItems: s.customItems.filter((i) => i.id !== id),
		cart: s.cart.filter((l) => l.itemId !== id)
	})),
	setFeatured: (ids) => set({ featuredIds: ids }),
	toggleFeatured: (id) => set((s) => {
		if (s.featuredIds.includes(id)) return { featuredIds: s.featuredIds.filter((x) => x !== id) };
		return { featuredIds: [...s.featuredIds, id] };
	}),
	moveFeatured: (id, dir) => set((s) => {
		const ids = [...s.featuredIds];
		const i = ids.indexOf(id);
		const j = i + dir;
		if (i < 0 || j < 0 || j >= ids.length) return s;
		const tmp = ids[i];
		ids[i] = ids[j];
		ids[j] = tmp;
		return { featuredIds: ids };
	}),
	setCoefficient: (n) => set({ coefficient: Math.min(5, Math.max(.1, Number.isFinite(n) ? n : 1)) }),
	setDiscount: (n) => set({ discountPercent: Math.min(100, Math.max(0, Number.isFinite(n) ? n : 0)) }),
	setCustomer: (customerName) => set({ customerName }),
	setProject: (projectName) => set({ projectName }),
	setNotes: (notes) => set({ notes }),
	saveEstimate: () => {
		const snap = getInvoiceSnapshot();
		if (snap.lines.length === 0) return null;
		const saved = {
			id: `est-${Date.now()}`,
			createdAt: Date.now(),
			customerName: snap.customerName,
			projectName: snap.projectName,
			notes: snap.notes,
			lines: snap.lines,
			coefficient: snap.coefficient,
			discountPercent: snap.discountPercent,
			total: snap.total
		};
		set((s) => ({ estimates: [saved, ...s.estimates].slice(0, 40) }));
		return saved;
	},
	deleteEstimate: (id) => set((s) => ({ estimates: s.estimates.filter((e) => e.id !== id) })),
	loadEstimate: (id) => {
		const est = get().estimates.find((e) => e.id === id);
		if (!est) return;
		set({
			cart: est.lines.map((l) => ({
				itemId: l.itemId,
				qty: l.qty
			})),
			customerName: est.customerName,
			projectName: est.projectName,
			notes: est.notes,
			coefficient: est.coefficient,
			discountPercent: est.discountPercent
		});
	},
	resetPrices: () => set({ priceOverrides: {} })
}), { name: "acdc-calc-v1" }));
function resolveItem(id) {
	const custom = useCalc.getState().customItems.find((i) => i.id === id);
	if (custom) return {
		...custom,
		custom: true
	};
	return ITEMS.find((i) => i.id === id);
}
function resolvePrice(id) {
	const override = useCalc.getState().priceOverrides[id];
	if (typeof override === "number") return override;
	return resolveItem(id)?.price ?? 0;
}
function getInvoiceSnapshot() {
	const s = useCalc.getState();
	const lines = s.cart.map((line) => {
		const item = resolveItem(line.itemId);
		if (!item || line.qty <= 0) return null;
		const unitPrice = resolvePrice(line.itemId);
		return {
			itemId: line.itemId,
			title: item.title,
			unit: UNIT_LABEL[item.unit],
			qty: line.qty,
			unitPrice,
			amount: unitPrice * line.qty
		};
	}).filter((x) => x !== null);
	const subtotal = lines.reduce((sum, l) => sum + l.amount, 0);
	const afterCoef = subtotal * s.coefficient;
	const discountAmount = afterCoef * (s.discountPercent / 100);
	const total = Math.max(0, afterCoef - discountAmount);
	const itemCount = lines.reduce((sum, l) => sum + l.qty, 0);
	return {
		customerName: s.customerName,
		projectName: s.projectName,
		notes: s.notes,
		coefficient: s.coefficient,
		discountPercent: s.discountPercent,
		lines,
		subtotal,
		afterCoef,
		discountAmount,
		total,
		itemCount
	};
}
function useInvoice() {
	useCalc((s) => s.cart);
	useCalc((s) => s.coefficient);
	useCalc((s) => s.discountPercent);
	useCalc((s) => s.customerName);
	useCalc((s) => s.projectName);
	useCalc((s) => s.notes);
	useCalc((s) => s.priceOverrides);
	useCalc((s) => s.customItems);
	return getInvoiceSnapshot();
}
var FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
var AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
function toFaDigits(value) {
	return String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)] ?? d);
}
function parseFaNumber(raw) {
	const normalized = raw.replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d))).replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d))).replace(/[٬,]/g, "").replace(/٫/g, ".").trim();
	const n = Number(normalized);
	return Number.isFinite(n) ? n : NaN;
}
function formatToman(n) {
	return toFaDigits(Math.round(n).toLocaleString("en-US"));
}
var JALALI_MONTHS = [
	"فروردین",
	"اردیبهشت",
	"خرداد",
	"تیر",
	"مرداد",
	"شهریور",
	"مهر",
	"آبان",
	"آذر",
	"دی",
	"بهمن",
	"اسفند"
];
function gregorianToJalali(gy, gm, gd) {
	const g_d_m = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	];
	const gy2 = gm > 2 ? gy + 1 : gy;
	let days = 355666 + 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
	let jy = -1595 + 33 * Math.floor(days / 12053);
	days %= 12053;
	jy += 4 * Math.floor(days / 1461);
	days %= 1461;
	if (days > 365) {
		jy += Math.floor((days - 1) / 365);
		days = (days - 1) % 365;
	}
	const jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
	const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
	return {
		jy,
		jm,
		jd
	};
}
function formatJalali(date = /* @__PURE__ */ new Date()) {
	const { jy, jm, jd } = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
	return `${toFaDigits(jd)} ${JALALI_MONTHS[jm - 1]} ${toFaDigits(jy)}`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV = [
	{
		to: "/",
		label: "خانه",
		icon: House
	},
	{
		to: "/catalog",
		label: "فهرست",
		icon: List
	},
	{
		to: "/estimate",
		label: "فاکتور",
		icon: FileText
	},
	{
		to: "/settings",
		label: "تنظیمات",
		icon: Settings
	}
];
function AppShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-2xl pb-28",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})]
	});
}
function BottomNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const invoice = useInvoice();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "no-print fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-2xl grid-cols-4 px-2 pb-[env(safe-area-inset-bottom)]",
			children: NAV.map((item) => {
				const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: cn("relative flex flex-col items-center gap-1 py-3 text-xs transition-colors duration-150", active ? "text-primary" : "text-muted"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							strokeWidth: active ? 2.2 : 1.75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }),
						item.to === "/estimate" && invoice.lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute start-1/2 top-1.5 ms-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium leading-none text-primary-fg tabular-nums",
							children: toFaDigits(invoice.lines.length)
						}) : null
					]
				}, item.to);
			})
		})
	});
}
function PageHeader({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-start justify-between gap-3 px-5 pt-6 pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-xl font-semibold tracking-tight text-fg",
			children: title
		}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: subtitle
		}) : null] }), action]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-surface-2 px-3 text-sm text-fg outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
//#endregion
export { toFaDigits as _, Input as a, SHOLE_RULES as c, findCategory as d, formatJalali as f, resolvePrice as g, parseFaNumber as h, ITEMS as i, UNIT_LABEL as l, itemsByCategory as m, CATEGORIES as n, PageHeader as o, formatToman as p, DAILY_MASTER as r, QUICK_RATES as s, AppShell as t, cn as u, useCalc as v, useInvoice as y };

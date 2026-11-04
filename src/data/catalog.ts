export type UnitId =
  | "piece"
  | "meter"
  | "m2"
  | "line"
  | "pair"
  | "day"
  | "hour"
  | "device"
  | "set"
  | "session"
  | "service";

export const UNIT_LABEL: Record<UnitId, string> = {
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
  service: "سرویس",
};

export type CategoryId =
  | "map"
  | "box"
  | "conduit"
  | "wire"
  | "cable"
  | "panel"
  | "light"
  | "intercom"
  | "hardware"
  | "earthing"
  | "facade"
  | "daily";

export type CategoryIconName =
  | "ruler"
  | "hammer"
  | "pipe"
  | "box"
  | "duct"
  | "cable"
  | "unplug"
  | "toggle"
  | "light"
  | "panel"
  | "shield"
  | "phone"
  | "fan"
  | "alert"
  | "camera"
  | "clock";

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  icon: CategoryIconName;
}

export interface WorkItem {
  id: string;
  categoryId: CategoryId;
  title: string;
  unit: UnitId;
  price: number;
  note?: string;
}

/** نرخنامه به ریال است؛ داخل اپ همه قیمت‌ها تومان (ریال ÷ ۱۰) ذخیره می‌شود. */
export const SHOLE = 360_000;
export const SHOLE_CEILING = 500_000;
export const AREA_M2 = 450_000;
export const AREA_CEILING_M2 = 630_000;
export const DAILY_MASTER = 3_000_000;
export const VISIT_FEE = 750_000;

export const CATEGORIES: Category[] = [
  { id: "box", title: "قوطی و تابلو", subtitle: "قوطی، فریم، جعبه تقسیم", icon: "box" },
  { id: "conduit", title: "لوله‌کشی", subtitle: "PVC، خرطومی، فولادی", icon: "pipe" },
  { id: "wire", title: "سیم‌کشی", subtitle: "داخل لوله، همه مقاطع", icon: "cable" },
  { id: "cable", title: "کابل‌کشی", subtitle: "برق، شبکه، فیبر، HDMI", icon: "unplug" },
  { id: "panel", title: "سربندی تابلو", subtitle: "مینیاتوری، نشت جریان", icon: "panel" },
  { id: "light", title: "چراغ و لاین", subtitle: "توکار، روکار، ریسه", icon: "light" },
  { id: "intercom", title: "آیفون و آنتن", subtitle: "صوتی، تصویری، تلفن", icon: "phone" },
  { id: "earthing", title: "ارت و هم‌بندی", subtitle: "چاه ارت، ستون، فنداسیون", icon: "shield" },
  { id: "hardware", title: "ادوات", subtitle: "بست، راد، سوراخکاری کناف", icon: "hammer" },
  { id: "facade", title: "نما و بازدید", subtitle: "نورپردازی نما، حق ویزیت", icon: "camera" },
  { id: "map", title: "نقشه و خط‌کشی", subtitle: "تراز و ازبیلت", icon: "ruler" },
  { id: "daily", title: "روزمزد", subtitle: "استادکار طبق نرخنامه", icon: "clock" },
];

export const DEFAULT_FEATURED: CategoryId[] = [
  "box",
  "conduit",
  "wire",
  "cable",
  "panel",
  "light",
  "intercom",
  "earthing",
];

export const ITEMS: WorkItem[] = [
  { id: "i01", categoryId: "map", title: "اجرای خط‌کشی تراز روی دیوار", unit: "meter", price: 75_000 },
  { id: "i02", categoryId: "map", title: "تهیه نقشه ازبیلت دستی روی معماری", unit: "m2", price: 100_000 },

  { id: "i03", categoryId: "box", title: "قوطی‌گذاری روی سطوح جهت کلید و پریز", unit: "piece", price: 75_000 },
  { id: "i04", categoryId: "box", title: "قوطی‌گذاری در کناف جهت کلید و پریز", unit: "piece", price: 75_000 },
  { id: "i05", categoryId: "box", title: "نصب فریم گچی چراغ", unit: "piece", price: 60_000 },
  { id: "i06", categoryId: "box", title: "نصب تابلو ۱ ردیفه ۱۲ فیدر", unit: "piece", price: Math.round(1.5 * SHOLE), note: "معادل ۱٫۵ شعله" },
  { id: "i07", categoryId: "box", title: "نصب تابلو ۲ ردیفه ۲۴ فیدر", unit: "piece", price: 3 * SHOLE, note: "معادل ۳ شعله" },
  { id: "i08", categoryId: "box", title: "نصب تابلو ۳ ردیفه ۳۶ فیدر", unit: "piece", price: 4 * SHOLE, note: "معادل ۴ شعله" },
  { id: "i09", categoryId: "box", title: "نصب جعبه تقسیم روکار فلزی و PVC", unit: "piece", price: 150_000, note: "بدون بوشن و براس‌بوش" },
  { id: "i10", categoryId: "box", title: "نصب فریم تابلو توکار تا ۵۱×۵۱ سانتی‌متر", unit: "piece", price: 225_000, note: "بدون تخریب" },
  { id: "i11", categoryId: "box", title: "نصب فریم تابلو توکار تا ۱×۱ متر", unit: "piece", price: 400_000, note: "بدون تخریب" },
  { id: "i12", categoryId: "box", title: "نصب فریم تابلو توکار تا ۱٫۵×۱٫۵ متر", unit: "piece", price: 525_000, note: "بدون تخریب" },
  { id: "i13", categoryId: "box", title: "نصب فریم تابلو توکار تا ۲×۲ متر", unit: "piece", price: 615_000, note: "بدون تخریب" },
  { id: "i14", categoryId: "box", title: "نصب تابلو تا سایز ۵۱×۵۱ سانتی‌متر", unit: "piece", price: 315_000, note: "بدون سربندی" },
  { id: "i15", categoryId: "box", title: "نصب تابلو تا سایز ۱×۱ متر", unit: "piece", price: 615_000, note: "بدون سربندی" },
  { id: "i16", categoryId: "box", title: "نصب تابلو تا سایز ۱٫۵×۱٫۵ متر", unit: "piece", price: 700_000, note: "بدون سربندی" },
  { id: "i17", categoryId: "box", title: "نصب تابلو تا سایز ۲×۲ متر", unit: "piece", price: 1_000_000, note: "بدون سربندی" },
  { id: "i18", categoryId: "box", title: "نصب فریم چراغ سیلندری تا ۹۱ میلی‌متر", unit: "piece", price: 30_000, note: "بدون تخریب" },
  { id: "i19", categoryId: "box", title: "نصب فریم چراغ سیلندری بیش از ۹۱ میلی‌متر", unit: "piece", price: 15_000, note: "بدون تخریب" },

  { id: "i20", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۲۰ میلی‌متر", unit: "meter", price: 62_500 },
  { id: "i21", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۲۵ میلی‌متر", unit: "meter", price: 69_000 },
  { id: "i22", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۳۲ میلی‌متر", unit: "meter", price: 90_000 },
  { id: "i23", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۴۰ میلی‌متر", unit: "meter", price: 105_000 },
  { id: "i24", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۵۰ میلی‌متر", unit: "meter", price: 127_500 },
  { id: "i25", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۶۳ میلی‌متر", unit: "meter", price: 150_000 },
  { id: "i26", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۹۰ میلی‌متر", unit: "meter", price: 225_000 },
  { id: "i27", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۱۱۰ میلی‌متر", unit: "meter", price: 300_000 },
  { id: "i28", categoryId: "conduit", title: "لوله‌کشی توکار PVC سایز ۱۲۵ میلی‌متر", unit: "meter", price: 375_000 },
  { id: "i29", categoryId: "conduit", title: "لوله‌کشی خرطومی نسوز تمامی سایزها", unit: "meter", price: 50_000 },
  { id: "i30", categoryId: "conduit", title: "خرطومی فلزی (فلکسیبل) تا سایز ۱۳", unit: "meter", price: 50_000, note: "بدون بست" },
  { id: "i31", categoryId: "conduit", title: "خرطومی فلزی سایز ۱۶ تا ۲۵", unit: "meter", price: 60_000, note: "بدون بست" },
  { id: "i32", categoryId: "conduit", title: "خرطومی فلزی سایز ۲۹ و ۳۶", unit: "meter", price: 135_000, note: "بدون بست" },
  { id: "i33", categoryId: "conduit", title: "خرطومی فلزی سایز ۴۲ به بالا", unit: "meter", price: 150_000, note: "بدون بست" },
  { id: "i34", categoryId: "conduit", title: "لوله فولادی گالوانیزه PG ۱۱ و ۱۳٫۵", unit: "meter", price: 100_000, note: "به‌طور کامل" },
  { id: "i35", categoryId: "conduit", title: "لوله فولادی گالوانیزه PG ۱۶", unit: "meter", price: 110_000, note: "به‌طور کامل" },
  { id: "i36", categoryId: "conduit", title: "لوله فولادی گالوانیزه PG ۲۱", unit: "meter", price: 150_000, note: "به‌طور کامل" },
  { id: "i37", categoryId: "conduit", title: "لوله فولادی گالوانیزه PG ۲۹", unit: "meter", price: 150_000, note: "به‌طور کامل" },
  { id: "i38", categoryId: "conduit", title: "لوله فولادی گالوانیزه PG ۳۶", unit: "meter", price: 150_000, note: "به‌طور کامل" },
  { id: "i39", categoryId: "conduit", title: "لوله فولادی گالوانیزه PG ۴۲", unit: "meter", price: 200_000, note: "به‌طور کامل" },

  { id: "i40", categoryId: "wire", title: "سیم‌کشی مقطع ۱٫۵ میلی‌متر مربع داخل لوله", unit: "meter", price: 30_000 },
  { id: "i41", categoryId: "wire", title: "سیم‌کشی مقطع ۲٫۵ میلی‌متر مربع داخل لوله", unit: "meter", price: 30_000 },
  { id: "i42", categoryId: "wire", title: "سیم‌کشی مقطع ۴ میلی‌متر مربع داخل لوله", unit: "meter", price: 40_000 },
  { id: "i43", categoryId: "wire", title: "سیم‌کشی مقطع ۶ میلی‌متر مربع داخل لوله", unit: "meter", price: 45_000 },
  { id: "i44", categoryId: "wire", title: "سیم‌کشی مقطع ۱۰ میلی‌متر مربع داخل لوله", unit: "meter", price: 50_000 },
  { id: "i45", categoryId: "wire", title: "سیم‌کشی مقطع ۱۶ میلی‌متر مربع داخل لوله", unit: "meter", price: 60_000 },
  { id: "i46", categoryId: "wire", title: "سیم‌کشی مقطع ۲۵ میلی‌متر مربع داخل لوله", unit: "meter", price: 60_000 },
  { id: "i47", categoryId: "wire", title: "سیم‌کشی مقطع ۳۵ میلی‌متر مربع داخل لوله", unit: "meter", price: 70_000 },
  { id: "i48", categoryId: "wire", title: "سیم‌کشی مقطع ۵۰ و ۷۰ میلی‌متر مربع داخل لوله", unit: "meter", price: 130_000 },

  { id: "i49", categoryId: "cable", title: "کابل‌کشی ۲×۱ تا ۵×۱٫۵ داخل لوله", unit: "meter", price: 60_000 },
  { id: "i50", categoryId: "cable", title: "کابل‌کشی ۲×۲٫۵ تا ۵×۲٫۵ داخل لوله", unit: "meter", price: 70_000 },
  { id: "i51", categoryId: "cable", title: "کابل‌کشی ۲×۴ تا ۵×۴ داخل لوله", unit: "meter", price: 75_000 },
  { id: "i52", categoryId: "cable", title: "کابل‌کشی ۲×۶ تا ۵×۶ داخل لوله", unit: "meter", price: 90_000 },
  { id: "i53", categoryId: "cable", title: "کابل‌کشی ۲×۱۰ تا ۵×۱۰ داخل لوله", unit: "meter", price: 100_000 },
  { id: "i54", categoryId: "cable", title: "کابل‌کشی ۲×۱۶ تا ۵×۱۶ داخل لوله", unit: "meter", price: 110_000 },
  { id: "i55", categoryId: "cable", title: "کابل‌کشی ۲×۲۵ تا ۵×۲۵ داخل لوله", unit: "meter", price: 130_000 },
  { id: "i56", categoryId: "cable", title: "کابل‌کشی ۳×۳۵ تا ۵×۳۵ داخل لوله", unit: "meter", price: 200_000 },
  { id: "i57", categoryId: "cable", title: "کابل‌کشی ۳×۵۰ و ۳×۵۰+۲۵ داخل لوله", unit: "meter", price: 230_000 },
  { id: "i58", categoryId: "cable", title: "کابل‌کشی ۳×۷۰ داخل لوله", unit: "meter", price: 270_000 },
  { id: "i59", categoryId: "cable", title: "کابل‌کشی ۳×۹۵+۵۰ داخل لوله", unit: "meter", price: 330_000 },
  { id: "i61", categoryId: "cable", title: "کابل جریان ضعیف تا ۶ زوج داخل لوله", unit: "meter", price: 25_000 },
  { id: "i62", categoryId: "cable", title: "هر زوج اضافه بر ۶ زوج داخل لوله", unit: "pair", price: 5_000 },
  { id: "i63", categoryId: "cable", title: "کابل‌کشی CAT داخل لوله", unit: "meter", price: 30_000 },
  { id: "i64", categoryId: "cable", title: "کابل کواکسیال، RG و صوت داخل لوله", unit: "meter", price: 30_000 },
  { id: "i65", categoryId: "cable", title: "کابل‌کشی HDMI", unit: "meter", price: 50_000 },
  { id: "i66", categoryId: "cable", title: "کابل فیبر نوری تا ۴ کر", unit: "meter", price: 42_000 },
  { id: "i67", categoryId: "cable", title: "کابل فیبر نوری ۱۲ و ۲۴ کر", unit: "meter", price: 51_000 },
  { id: "i68", categoryId: "cable", title: "کابل فیبر نوری ۴۸ کر", unit: "meter", price: 51_000 },
  { id: "i69", categoryId: "cable", title: "کابل ترکیبی برق و تصویر داخل لوله", unit: "meter", price: 33_000 },
  { id: "i70", categoryId: "cable", title: "اجرای نخ‌کشی داخل لوله", unit: "meter", price: 75_000 },

  { id: "i71", categoryId: "panel", title: "نصب و سربندی مینیاتوری تک‌فاز", unit: "piece", price: 280_000, note: "با وایرشو و کابلشو؛ بدون لوله و سیم" },
  { id: "i72", categoryId: "panel", title: "نصب و سربندی مینیاتوری سه‌فاز", unit: "piece", price: 450_000, note: "با وایرشو و کابلشو؛ بدون لوله و سیم" },
  { id: "i73", categoryId: "panel", title: "نصب کلید نشت جریان تک‌فاز", unit: "piece", price: 525_000, note: "با وایرشو و کابلشو؛ بدون لوله و سیم" },
  { id: "i74", categoryId: "panel", title: "نصب کلید نشت جریان سه‌فاز", unit: "piece", price: 675_000, note: "با وایرشو و کابلشو؛ بدون لوله و سیم" },
  { id: "i75", categoryId: "panel", title: "سربندی خط تک‌فاز تا سایز ۶", unit: "line", price: 150_000, note: "فاز، نول، ارت" },
  { id: "i76", categoryId: "panel", title: "سربندی خط تک‌فاز سایز ۱۰ و ۱۶", unit: "line", price: 180_000, note: "فاز، نول، ارت" },
  { id: "i77", categoryId: "panel", title: "سربندی خط سه‌فاز تا سایز ۶", unit: "line", price: 180_000, note: "۳ فاز، نول، ارت" },
  { id: "i78", categoryId: "panel", title: "سربندی خط سه‌فاز سایز ۱۰ و ۱۶", unit: "line", price: 250_000, note: "۳ فاز، نول، ارت" },
  { id: "i79", categoryId: "panel", title: "سربندی خط سه‌فاز سایز ۲۵ و ۳۵", unit: "line", price: 350_000, note: "۳ فاز، نول، ارت" },
  { id: "i80", categoryId: "panel", title: "سربندی خط سه‌فاز سایز ۵۰ و ۷۰", unit: "line", price: 450_000, note: "۳ فاز، نول، ارت" },
  { id: "i81", categoryId: "panel", title: "سربندی خط سه‌فاز سایز ۹۵ و ۱۲۰", unit: "line", price: 100_000, note: "۳ فاز، نول، ارت" },
  { id: "i82", categoryId: "panel", title: "سربندی خط سه‌فاز سایز ۱۵۰ و ۱۸۵", unit: "line", price: 130_000, note: "۳ فاز، نول، ارت" },
  { id: "i83", categoryId: "panel", title: "سربندی خط سه‌فاز سایز ۲۴۰ و ۳۰۰", unit: "line", price: 1_800_000, note: "۳ فاز، نول، ارت" },

  { id: "i84", categoryId: "light", title: "نصب و سربندی لامپ و سرپیچ", unit: "piece", price: 100_000 },
  { id: "i85", categoryId: "light", title: "چراغ توکار تا ۱۱۰ میلی‌متر", unit: "piece", price: 120_000, note: "با کانکتور؛ بدون لوله و سیم" },
  { id: "i86", categoryId: "light", title: "چراغ توکار ۱۱۵ تا ۳۱۰ میلی‌متر", unit: "piece", price: 225_000, note: "با کانکتور؛ بدون لوله و سیم" },
  { id: "i87", categoryId: "light", title: "چراغ توکار ۳۱۰ تا ۶۱۰ میلی‌متر", unit: "piece", price: 375_000, note: "با کانکتور؛ بدون لوله و سیم" },
  { id: "i88", categoryId: "light", title: "چراغ روکار تا ۱۱۰ میلی‌متر", unit: "piece", price: 300_000, note: "با کانکتور؛ بدون لوله و سیم" },
  { id: "i89", categoryId: "light", title: "چراغ روکار ۱۱۰ تا ۳۱۰ میلی‌متر", unit: "piece", price: 450_000, note: "با کانکتور؛ بدون لوله و سیم" },
  { id: "i90", categoryId: "light", title: "نصب شلنگی ۲۲۰ و ۱۲ ولت بدون چسب", unit: "meter", price: 60_000 },
  { id: "i91", categoryId: "light", title: "نصب سوکت و ترانس شلنگی", unit: "piece", price: 50_000 },
  { id: "i92", categoryId: "light", title: "نصب و سربندی ترانس و درایو ۱۲ ولت", unit: "piece", price: 300_000 },
  { id: "i93", categoryId: "light", title: "چراغ دفنی و استخری با واترپروف", unit: "piece", price: 675_000 },
  { id: "i94", categoryId: "light", title: "چراغ لاینی ۱ تا ۲ سانتی‌متر — تک ریسه", unit: "meter", price: 450_000, note: "بدون برش" },
  { id: "i95", categoryId: "light", title: "چراغ لاینی ۱ تا ۲ سانتی‌متر — دو ریسه", unit: "meter", price: 600_000, note: "بدون برش" },
  { id: "i96", categoryId: "light", title: "چراغ لاینی ۱ تا ۲ سانتی‌متر — سه ریسه", unit: "meter", price: 675_000, note: "بدون برش" },
  { id: "i97", categoryId: "light", title: "برش کناف جهت لاین نوری", unit: "meter", price: 300_000 },
  { id: "i98", categoryId: "light", title: "نصب لاین نوری در رابیتس", unit: "meter", price: 375_000 },
  { id: "i99", categoryId: "light", title: "نصب لاین نوری در سرامیک", unit: "meter", price: 375_000 },
  { id: "i100", categoryId: "light", title: "نصب چراغ ریلی", unit: "meter", price: Math.round(1.5 * SHOLE), note: "معادل ۱٫۵ شعله" },
  { id: "i101", categoryId: "light", title: "نصب ریموت کنترل روشنایی", unit: "piece", price: 675_000 },
  { id: "i102", categoryId: "light", title: "نصب پروفیل لاین نوری به‌صورت انتظار", unit: "meter", price: 225_000, note: "بدون اجرای ریسه" },
  { id: "i103", categoryId: "light", title: "لاین نوری در کناف — یک لاین", unit: "meter", price: 300_000 },
  { id: "i104", categoryId: "light", title: "لاین نوری در کناف — دو لاین", unit: "meter", price: 550_000 },
  { id: "i105", categoryId: "light", title: "لاین نوری در کناف — سه لاین", unit: "meter", price: 800_000 },
  { id: "i106", categoryId: "light", title: "نصب تاج پشت‌سطحی لاین ۱۲ یا ۲۴ ولت", unit: "meter", price: 300_000 },
  { id: "i107", categoryId: "light", title: "نصب کلید لمسی ۱۲ ولت", unit: "piece", price: Math.round(1.5 * SHOLE), note: "معادل ۱٫۵ شعله" },
  { id: "i108", categoryId: "light", title: "نصب امپلی ۱۲ ولت", unit: "piece", price: Math.round(1.5 * SHOLE), note: "معادل ۱٫۵ شعله" },
  { id: "i109", categoryId: "light", title: "بلندگوی سقفی توکار و روکار تا ۳۱۱ میلی‌متر", unit: "piece", price: 250_000, note: "بدون لوله و کابل" },
  { id: "i110", categoryId: "light", title: "نصب پروفیل خطی بدون زاویه", unit: "meter", price: 330_000 },
  { id: "i111", categoryId: "light", title: "نصب پروفیل به‌صورت فارسی‌بر", unit: "meter", price: 390_000 },
  { id: "i115", categoryId: "light", title: "ریسه لاین نوری در کابینت و کمد", unit: "meter", price: 325_000 },
  { id: "i116", categoryId: "light", title: "ریسه لاین نوری در رابیتس", unit: "meter", price: 325_000 },
  { id: "i117", categoryId: "light", title: "ریسه لاین نوری در سرامیک", unit: "meter", price: 325_000 },
  { id: "i118", categoryId: "light", title: "ریسه لاین نوری در کناف", unit: "meter", price: 300_000 },
  { id: "i119", categoryId: "light", title: "ریسه لاین نوری در نما", unit: "meter", price: 325_000 },
  { id: "i120", categoryId: "light", title: "لاین نوری روکار خطی و زاویه‌دار", unit: "meter", price: 300_000 },
  { id: "i121", categoryId: "light", title: "لاین نوری روکار آویز", unit: "meter", price: 300_000 },
  { id: "i122", categoryId: "light", title: "چشم الکترونیکی روکار و توکار با تنظیم", unit: "piece", price: 300_000 },
  { id: "i123", categoryId: "light", title: "نصب و سربندی فتوسل", unit: "piece", price: 450_000 },
  { id: "i124", categoryId: "light", title: "نصب و تنظیم ساعت نجومی", unit: "piece", price: 600_000 },
  { id: "i125", categoryId: "light", title: "باز کردن کلیه نصبیات جهت تعویض یا تعمیر", unit: "piece", price: 120_000 },
  { id: "i126", categoryId: "light", title: "چراغ آویز بدون مونتاژ و قلاب و زنجیر", unit: "piece", price: 180_000 },
  { id: "i156", categoryId: "light", title: "نصب هالوژن با گردبر تا ۹ وات", unit: "piece", price: 255_000 },
  { id: "i157", categoryId: "light", title: "نصب هالوژن از ۹ وات به بالا با گردبر", unit: "piece", price: 300_000 },

  { id: "i127", categoryId: "intercom", title: "درب‌بازکن صوتی", unit: "device", price: 2_250_000, note: "بدون لوله و کابل‌کشی" },
  { id: "i128", categoryId: "intercom", title: "درب‌بازکن تصویری", unit: "device", price: 2_350_000, note: "بدون لوله و کابل‌کشی" },
  { id: "i129", categoryId: "intercom", title: "آنتن معمولی و مرکزی — راه‌اندازی", unit: "piece", price: 750_000, note: "بدون لوله و کابل‌کشی" },
  { id: "i130", categoryId: "intercom", title: "نصب آنتن معمولی", unit: "piece", price: 415_000 },
  { id: "i131", categoryId: "intercom", title: "جعبه تلفن پیچی و کروز", unit: "pair", price: 60_000, note: "بدون لوله و کابل‌کشی" },

  { id: "i132", categoryId: "hardware", title: "نصب بست یک‌طرفه", unit: "piece", price: 45_000 },
  { id: "i133", categoryId: "hardware", title: "نصب راد با انکربولت در سقف", unit: "piece", price: 150_000 },
  { id: "i134", categoryId: "hardware", title: "نصب U چنل از ۱۰ تا ۱۰۰ سانتی‌متر", unit: "meter", price: 150_000 },
  { id: "i135", categoryId: "hardware", title: "نصب بست چنگالی", unit: "piece", price: 30_000 },
  { id: "i136", categoryId: "hardware", title: "سوراخکاری کناف جهت چراغ توکار تا ۱۰۰ میلی‌متر", unit: "piece", price: 60_000 },
  { id: "i137", categoryId: "hardware", title: "سوراخکاری کناف جهت چراغ توکار ۱۰۵ تا ۳۰۰ میلی‌متر", unit: "piece", price: 90_000 },

  { id: "i138", categoryId: "earthing", title: "اتصال سیم ارت به فنداسیون برای تابلو موقت", unit: "service", price: 800_000 },
  { id: "i139", categoryId: "earthing", title: "هم‌بندی ستون‌های بین طبقات بدون صفحه فلزی", unit: "service", price: 300_000 },
  { id: "i140", categoryId: "earthing", title: "هم‌بندی ستون‌های بین طبقات با صفحه فلزی", unit: "service", price: 360_000 },
  { id: "i141", categoryId: "earthing", title: "هم‌بندی فنداسیون و خرپشته تا ۵۰ متر مربع", unit: "service", price: 1_650_000 },
  { id: "i142", categoryId: "earthing", title: "هم‌بندی فنداسیون و سقف آخر تا ۲۰۰ متر مربع", unit: "service", price: 3_600_000 },
  { id: "i143", categoryId: "earthing", title: "هم‌بندی بالای ۲۰۰ متر مربع — هر متر اضافه", unit: "m2", price: 29_000 },
  { id: "i144", categoryId: "earthing", title: "هم‌بندی سقف‌های بین طبقات", unit: "service", price: 2_900_000 },
  { id: "i145", categoryId: "earthing", title: "انشعابات تابلو هم‌بندی اصلی و ارتینگ", unit: "service", price: 2_900_000 },
  { id: "i146", categoryId: "earthing", title: "ارت موقت و برق اتاقک نگهبانی قبل از فنداسیون", unit: "service", price: 1_200_000 },
  { id: "i147", categoryId: "earthing", title: "هم‌بندی اضافی واحدی", unit: "service", price: 2_400_000 },
  { id: "i148", categoryId: "earthing", title: "اجرای چاه ارت صفحه‌ای", unit: "device", price: 3_750_000, note: "حفر و پر کردن چاه با کارفرما" },
  { id: "i149", categoryId: "earthing", title: "اجرای چاه ارت الکترومیله‌ای", unit: "device", price: 3_750_000, note: "حفر و پر کردن چاه با کارفرما" },
  { id: "i150", categoryId: "earthing", title: "اجرای چاه ارت حلقوی با رعایت استاندارد", unit: "device", price: 1_200_000, note: "حفر و پر کردن چاه با کارفرما" },
  { id: "i151", categoryId: "earthing", title: "زدن میله ارت همراه با دریچه بازدید", unit: "device", price: 1_200_000 },

  { id: "i152", categoryId: "facade", title: "نورپردازی نما تا ۳ سقف — هر قطعه", unit: "piece", price: 750_000, note: "سیم‌کشی، ترمینال و وارنیش" },
  { id: "i153", categoryId: "facade", title: "نورپردازی نما از ۳ تا ۶ سقف — هر قطعه", unit: "piece", price: 1_125_000, note: "سیم‌کشی، ترمینال و وارنیش" },
  { id: "i154", categoryId: "facade", title: "نورپردازی نما از ۶ سقف به بالا — هر قطعه", unit: "piece", price: 1_500_000, note: "سیم‌کشی، ترمینال و وارنیش" },
  { id: "i155", categoryId: "facade", title: "حق ویزیت برقکار از هر پروژه", unit: "session", price: VISIT_FEE },

  { id: "i-day", categoryId: "daily", title: "استادکار ماهر روزمزد", unit: "day", price: DAILY_MASTER, note: "طبق بند ۱۶ نرخنامه؛ تأیید کارفرما" },
  { id: "i-hour", categoryId: "daily", title: "استادکار ساعتی", unit: "hour", price: 400_000 },
];

export const QUICK_RATES = {
  residentialM2: AREA_M2,
  officeM2: AREA_M2,
  commercialM2: AREA_M2,
  areaM2: AREA_M2,
  areaCeilingM2: AREA_CEILING_M2,
  shole: SHOLE,
  sholeCeiling: SHOLE_CEILING,
  dailyMaster: DAILY_MASTER,
} as const;

export const SHOLE_RULES = [
  "سیستم اعلام و اطفاء حریق: هر قطعه یک شعله",
  "کلید تک‌پل، تبدیل، پریز ارت‌دار، شاسی زنگ، ملودی، مینیاتوری، چشم، پریز آنتن و تلفن: هر کدام یک شعله",
  "کلید دوپل و پریز تلفن دوخط: هر کدام دو شعله",
  "کلید سه‌پل و بیشتر: هر پل یک شعله",
  "لوله و کابل دوربین و اعلام سرقت جداگانه و آیتمی حساب می‌شود",
] as const;

export function itemsByCategory(id: CategoryId): WorkItem[] {
  return ITEMS.filter((item) => item.categoryId === id);
}

export function findCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function findItem(id: string): WorkItem | undefined {
  return ITEMS.find((i) => i.id === id);
}

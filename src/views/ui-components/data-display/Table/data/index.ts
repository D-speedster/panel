export type Person = {
    id: number
    firstName: string
    lastName: string
    email: string
    gender: string
}

export type PersonWithSubRow = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
    subRows?: PersonWithSubRow[]
}

export const data100: Person[] = [
    {
        id: 1,
        firstName: 'آلاستیر',
        lastName: 'دیلکس',
        email: 'adilkes0@jigsy.com',
        gender: 'زن',
    },
    {
        id: 2,
        firstName: 'ماتائوس',
        lastName: 'گرابر',
        email: 'mgraber1@adobe.com',
        gender: 'جندرکوییر',
    },
    {
        id: 3,
        firstName: 'گایل',
        lastName: 'کروکلی',
        email: 'gcroxley2@businessinsider.com',
        gender: 'مرد',
    },
    {
        id: 4,
        firstName: 'گراشیا',
        lastName: 'دومگان',
        email: 'gdomegan3@reference.com',
        gender: 'جندر فلوید',
    },
    {
        id: 5,
        firstName: 'گالوین',
        lastName: 'برینگر',
        email: 'gberinger4@yellowpages.com',
        gender: 'بی‌جندر',
    },
    {
        id: 6,
        firstName: 'مود',
        lastName: 'آیشسون',
        email: 'maicheson5@ycombinator.com',
        gender: 'مرد',
    },
    {
        id: 7,
        firstName: 'گوئنت',
        lastName: 'دالی',
        email: 'gdailey6@state.tx.us',
        gender: 'جندر فلوید',
    },
    {
        id: 8,
        firstName: 'ماریوس',
        lastName: 'لمان',
        email: 'mleman7@cnn.com',
        gender: 'جندر فلوید',
    },
    {
        id: 9,
        firstName: 'ناتکا',
        lastName: 'وارکو',
        email: 'nvarcoe8@hhs.gov',
        gender: 'مرد',
    },
    {
        id: 10,
        firstName: 'کللی',
        lastName: 'آکرلی',
        email: 'kackerley9@posterous.com',
        gender: 'جندر فلوید',
    },
    {
        id: 11,
        firstName: 'کیمبل',
        lastName: 'شیلیگ',
        email: 'kshillinga@ibm.com',
        gender: 'بی‌جندر',
    },
    {
        id: 12,
        firstName: 'تامی',
        lastName: 'ماتینسون',
        email: 'tmattinsonb@g.co',
        gender: 'بی‌جندر',
    },
    {
        id: 13,
        firstName: 'آنتونی',
        lastName: 'بودمید',
        email: 'abodemeaidc@google.com',
        gender: 'جندرکوییر',
    },
    {
        id: 14,
        firstName: 'کوردی',
        lastName: 'بروک‌وی',
        email: 'cbrockwayd@ucoz.ru',
        gender: 'مرد',
    },
    {
        id: 15,
        firstName: 'اماماریا',
        lastName: 'ژاکم',
        email: 'ajaquemee@google.fr',
        gender: 'پولای جندر',
    },
    {
        id: 16,
        firstName: 'اوربانو',
        lastName: 'پاتر',
        email: 'upotterf@symantec.com',
        gender: 'بی‌جندر',
    },
    {
        id: 17,
        firstName: 'عمر',
        lastName: 'سیمیسون',
        email: 'osimysong@de.vu',
        gender: 'غیرباینری',
    },
    {
        id: 18,
        firstName: 'اولوا',
        lastName: 'شو بریج',
        email: 'oshoubridgeh@senate.gov',
        gender: 'جندر فلوید',
    },
    {
        id: 19,
        firstName: 'دومینیک',
        lastName: 'نیبلو',
        email: 'dnibloei@php.net',
        gender: 'بی‌جندر',
    },
    
    {
        id: 20,
        firstName: 'کاریـن',
        lastName: 'کرموت',
        email: 'ckermottj@trellian.com',
        gender: 'بی‌جندر',
    },
    {
        id: 21,
        firstName: 'آمبرلی',
        lastName: 'پارهم',
        email: 'aparhamk@webnode.com',
        gender: 'جندر فلوید',
    },
    {
        id: 22,
        firstName: 'اودل',
        lastName: 'ویلمن',
        email: 'owillmanl@instagram.com',
        gender: 'بی‌جندر',
    },
    {
        id: 23,
        firstName: 'احمد',
        lastName: 'شاتل',
        email: 'ashuttellm@studiopress.com',
        gender: 'بی‌جندر',
    },
    {
        id: 24,
        firstName: 'وینی',
        lastName: 'ولبری',
        email: 'wwelberryn@ovh.net',
        gender: 'بی‌جندر',
    },
    {
        id: 25,
        firstName: 'مت',
        lastName: 'مک‌فی',
        email: 'mmcfeeo@msn.com',
        gender: 'مرد',
    },
    {
        id: 26,
        firstName: 'کریستی',
        lastName: 'اولاندر',
        email: 'collanderp@wikia.com',
        gender: 'جندرکوییر',
    },
    {
        id: 27,
        firstName: 'سفایرا',
        lastName: 'آلوت',
        email: 'sallotq@kickstarter.com',
        gender: 'پولای جندر',
    },
    {
        id: 28,
        firstName: 'کارالین',
        lastName: 'اسکلورن',
        email: 'kskellorner@nasa.gov',
        gender: 'مرد',
    },
    {
        id: 29,
        firstName: 'مایر',
        lastName: 'کالیستر',
        email: 'mcallisters@shinystat.com',
        gender: 'جندر فلوید',
    },
    {
        id: 30,
        firstName: 'برته',
        lastName: 'هورسفیلد',
        email: 'bhorsfieldt@tumblr.com',
        gender: 'بی‌جندر',
    },
    {
        id: 31,
        firstName: 'گرتیانا',
        lastName: 'ساوث‌هاوس',
        email: 'gsouthouseu@w3.org',
        gender: 'بی‌جندر',
    },
    {
        id: 32,
        firstName: 'هارلی',
        lastName: 'فلیکنو',
        email: 'hflecknov@opensource.org',
        gender: 'جندرکوییر',
    },
    {
        id: 33,
        firstName: 'السی',
        lastName: 'مدندورپ',
        email: 'emedendorpw@google.pl',
        gender: 'جندرکوییر',
    },
    {
        id: 34,
        firstName: 'مایکل',
        lastName: 'ردهاوس',
        email: 'mredhousex@comcast.net',
        gender: 'پولای جندر',
    },
    {
        id: 35,
        firstName: 'گرترود',
        lastName: 'فرنچ',
        email: 'gfrenchy@netscape.com',
        gender: 'جندر فلوید',
    },
    {
        id: 36,
        firstName: 'کوری',
        lastName: 'والاس',
        email: 'cwallacez@i2i.jp',
        gender: 'جندرکوییر',
    },
    {
        id: 37,
        firstName: 'فرانتس',
        lastName: 'پیناک',
        email: 'fpinnocke10@disqus.com',
        gender: 'مرد',
    },
    
    {
        id: 38,
        firstName: 'آردات',
        lastName: 'دنگی',
        email: 'adungay11@naver.com',
        gender: 'غیر دودویی',
    },
    {
        id: 39,
        firstName: 'کولان',
        lastName: 'مک‌کارتنی',
        email: 'cmaccartney12@hhs.gov',
        gender: 'جندرکوییر',
    },
    {
        id: 40,
        firstName: 'لیسی',
        lastName: 'دیلاوی',
        email: 'ldillaway13@dell.com',
        gender: 'پولای جندر',
    },
    {
        id: 41,
        firstName: 'رزلی',
        lastName: 'جابرن',
        email: 'rjoburn14@toplist.cz',
        gender: 'جندرکوییر',
    },
    {
        id: 42,
        firstName: 'رائنان',
        lastName: 'لیگرت‌وود',
        email: 'rligertwood15@yahoo.co.jp',
        gender: 'غیر دودویی',
    },
    {
        id: 43,
        firstName: 'دات',
        lastName: 'بارلینگ',
        email: 'dbarling16@usgs.gov',
        gender: 'جندر فلوید',
    },
    {
        id: 44,
        firstName: 'تاکستر',
        lastName: 'کینل‌ساید',
        email: 'tkinleyside17@istockphoto.com',
        gender: 'بی‌جندر',
    },
    {
        id: 45,
        firstName: 'آنیه',
        lastName: 'پری',
        email: 'aperri18@fastcompany.com',
        gender: 'مرد',
    },
    
    {
        id: 46,
        firstName: 'حییم',
        lastName: 'هوندسون',
        email: 'hhoundson19@wsj.com',
        gender: 'بی‌جندر',
    },
    {
        id: 47,
        firstName: 'کریستوس',
        lastName: 'براون',
        email: 'kbraun1a@who.int',
        gender: 'پولای جندر',
    },
    {
        id: 48,
        firstName: 'خوسیتو',
        lastName: 'چایس',
        email: 'jchaise1b@cbc.ca',
        gender: 'پولای جندر',
    },
    {
        id: 49,
        firstName: 'تریان',
        lastName: 'باسینگهم',
        email: 'tbassingham1c@oracle.com',
        gender: 'پولای جندر',
    },
    {
        id: 50,
        firstName: 'کینتا',
        lastName: 'سالستروم',
        email: 'qsahlstrom1d@msu.edu',
        gender: 'بی‌جندر',
    },
    {
        id: 51,
        firstName: 'فیلیپ',
        lastName: 'مک‌گاگی',
        email: 'pmacgaughy1e@usa.gov',
        gender: 'بی‌جندر',
    },
    {
        id: 52,
        firstName: 'لئونارد',
        lastName: 'کلاوه',
        email: 'lclawe1f@sfgate.com',
        gender: 'غیر دودویی',
    },
    {
        id: 53,
        firstName: 'گیل',
        lastName: 'ریلت',
        email: 'grylett1g@blogger.com',
        gender: 'زن',
    },
    {
        id: 54,
        firstName: 'رومین',
        lastName: 'مک‌کوتئون',
        email: 'rmccutheon1h@miitbeian.gov.cn',
        gender: 'پولای جندر',
    },
    {
        id: 55,
        firstName: 'کیمبرلی',
        lastName: 'ریپشر',
        email: 'kripsher1i@quantcast.com',
        gender: 'بی‌جندر',
    },
    {
        id: 56,
        firstName: 'الکسیه',
        lastName: 'ردر',
        email: 'areder1j@wordpress.com',
        gender: 'غیر دودویی',
    },
    {
        id: 57,
        firstName: 'آلی',
        lastName: 'ماس‌بی',
        email: 'amossbee1k@umn.edu',
        gender: 'بی‌جندر',
    },
    {
        id: 58,
        firstName: 'مکسی',
        lastName: 'آلیستون',
        email: 'malliston1l@blogs.com',
        gender: 'بی‌جندر',
    },
    {
        id: 59,
        firstName: 'ترنا',
        lastName: 'هبال',
        email: 'thabbal1m@umn.edu',
        gender: 'بی‌جندر',
    },
    {
        id: 60,
        firstName: 'نیکی',
        lastName: 'داوسینگ',
        email: 'ndowsing1n@mtv.com',
        gender: 'بی‌جندر',
    },
    {
        id: 61,
        firstName: 'امیلی',
        lastName: 'اسکروگس',
        email: 'escrogges1o@goodreads.com',
        gender: 'جندرکوییر',
    },
    {
        id: 62,
        firstName: 'ورادیس',
        lastName: 'فاکس‌هال',
        email: 'vfoxhall1p@de.vu',
        gender: 'جندرکوییر',
    },
    {
        id: 63,
        firstName: 'کال',
        lastName: 'پیری',
        email: 'cpirrey1q@chronoengine.com',
        gender: 'بی‌جندر',
    },
    
    {
        id: 64,
        firstName: 'میکی',
        lastName: 'یوریج',
        email: 'murridge1r@creativecommons.org',
        gender: 'بی‌جندر',
    },
    {
        id: 65,
        firstName: 'لارری',
        lastName: 'هنزه',
        email: 'lhenze1s@cdc.gov',
        gender: 'زن',
    },
    {
        id: 66,
        firstName: 'آلیا',
        lastName: 'بودون',
        email: 'abaudon1t@telegraph.co.uk',
        gender: 'غیر دودویی',
    },
    {
        id: 67,
        firstName: 'کریستیانو',
        lastName: 'هاردی-پیگین',
        email: 'chardypiggin1u@google.it',
        gender: 'جندرکوییر',
    },
    {
        id: 68,
        firstName: 'تان',
        lastName: 'ایوریزی',
        email: 'tiorizzi1v@yahoo.com',
        gender: 'غیر دودویی',
    },
    {
        id: 69,
        firstName: 'اورالیا',
        lastName: 'سیپی',
        email: 'osaipy1w@delicious.com',
        gender: 'بی‌جندر',
    },
    {
        id: 70,
        firstName: 'کارول',
        lastName: 'کینگ',
        email: 'kkynge1x@state.gov',
        gender: 'بی‌جندر',
    },
    {
        id: 71,
        firstName: 'فرانسیسکوس',
        lastName: 'مک‌کومسکی',
        email: 'fmaccumeskey1y@about.me',
        gender: 'غیر دودویی',
    },
    {
        id: 72,
        firstName: 'پانسی',
        lastName: 'تهبس',
        email: 'pthebes1z@cdc.gov',
        gender: 'جندرکوییر',
    },
    {
        id: 73,
        firstName: 'اب',
        lastName: 'پوگسون',
        email: 'apogson20@flavors.me',
        gender: 'جندر فلوید',
    },
    {
        id: 74,
        firstName: 'مولی',
        lastName: 'مک‌فیت',
        email: 'mmcfeate21@yahoo.co.jp',
        gender: 'پولای جندر',
    },
    {
        id: 75,
        firstName: 'فلمینگ',
        lastName: 'کارمل',
        email: 'fkarmel22@sphinn.com',
        gender: 'مرد',
    },
    {
        id: 76,
        firstName: 'گریک',
        lastName: 'شیوِلین',
        email: 'gshivlin23@ox.ac.uk',
        gender: 'بی‌جندر',
    },
    {
        id: 77,
        firstName: 'آنابل',
        lastName: 'دیتچ',
        email: 'aditch24@examiner.com',
        gender: 'پولای جندر',
    },
    {
        id: 78,
        firstName: 'محمد',
        lastName: 'د گوئی',
        email: 'mdegouy25@aol.com',
        gender: 'جندر فلوید',
    },
    {
        id: 79,
        firstName: 'بوگارت',
        lastName: 'برتین',
        email: 'bbertin26@salon.com',
        gender: 'پولای جندر',
    },
    {
        id: 80,
        firstName: 'کریستین',
        lastName: 'اولیوراس',
        email: 'koliveras27@topsy.com',
        gender: 'جندر فلوید',
    },
    
    {
        id: 81,
        firstName: 'ژنوورا',
        lastName: 'کراسکل',
        email: 'gcrosskell28@goo.ne.jp',
        gender: 'زن',
    },
    {
        id: 82,
        firstName: 'جورجیانه',
        lastName: 'بوسانکو',
        email: 'gbosanko29@state.tx.us',
        gender: 'جندرکوییر',
    },
    {
        id: 83,
        firstName: 'میشل',
        lastName: 'واترز',
        email: 'mwatters2a@state.gov',
        gender: 'جندر فلوید',
    },
    {
        id: 84,
        firstName: 'وایلن',
        lastName: 'سامرلین',
        email: 'wsummerlee2b@ed.gov',
        gender: 'مرد',
    },
    {
        id: 85,
        firstName: 'دیکس',
        lastName: 'دیکز',
        email: 'ddikes2c@drupal.org',
        gender: 'مرد',
    },
    {
        id: 86,
        firstName: 'سایمب',
        lastName: 'دین‌وودی',
        email: 'cdinwoodie2d@gizmodo.com',
        gender: 'بی‌جندر',
    },
    {
        id: 87,
        firstName: 'مایلو',
        lastName: 'کیلی',
        email: 'mkeeley2e@imdb.com',
        gender: 'جندرکوییر',
    },
    {
        id: 88,
        firstName: 'هارمان',
        lastName: 'احمد',
        email: 'hahmad2f@123-reg.co.uk',
        gender: 'جندر فلوید',
    },
    {
        id: 89,
        firstName: 'رونالدا',
        lastName: 'کاش',
        email: 'rcush2g@blogtalkradio.com',
        gender: 'پولای جندر',
    },
    {
        id: 90,
        firstName: 'آنابل',
        lastName: 'پلسینگ',
        email: 'aplessing2h@shinystat.com',
        gender: 'بی‌جندر',
    },
    {
        id: 91,
        firstName: 'ملیس',
        lastName: 'دالزل',
        email: 'mdalzell2i@vk.com',
        gender: 'جندرکوییر',
    },
    {
        id: 92,
        firstName: 'مورلی',
        lastName: 'کریگ',
        email: 'mcregg2j@google.com',
        gender: 'پولای جندر',
    },
    {
        id: 93,
        firstName: 'پیگی',
        lastName: 'اورمروید',
        email: 'pormerod2k@latimes.com',
        gender: 'جندر فلوید',
    },
    {
        id: 94,
        firstName: 'ترزا',
        lastName: 'ایفانت',
        email: 'tinfante2l@php.net',
        gender: 'زن',
    },
    {
        id: 95,
        firstName: 'کارلین',
        lastName: 'تاکس',
        email: 'ktackes2m@mapquest.com',
        gender: 'مرد',
    },
    {
        id: 96,
        firstName: 'توبه',
        lastName: 'دثلوف',
        email: 'tdethloff2n@tamu.edu',
        gender: 'غیر دودویی',
    },
    {
        id: 97,
        firstName: 'ولی',
        lastName: 'جودینز',
        email: 'vjoddins2o@devhub.com',
        gender: 'زن',
    },
    {
        id: 98,
        firstName: 'فردینندا',
        lastName: 'اوتی',
        email: 'foty2p@shutterfly.com',
        gender: 'زن',
    },
    {
        id: 99,
        firstName: 'اموری',
        lastName: 'آسپلن',
        email: 'aasplen2q@va.gov',
        gender: 'غیر دودویی',
    },
    {
        id: 100,
        firstName: 'شیموس',
        lastName: 'سوال‌ول',
        email: 'sswallwell2r@mapy.cz',
        gender: 'غیر دودویی',
    },    
]

export const data10: Person[] = [
    {
        id: 1,
        firstName: 'آلاستیر',
        lastName: 'دیلیکس',
        email: 'adilkes0@jigsy.com',
        gender: 'زن',
    },
    {
        id: 2,
        firstName: 'ماتئوس',
        lastName: 'گراپر',
        email: 'mgraber1@adobe.com',
        gender: 'جندرکوییر',
    },
    {
        id: 3,
        firstName: 'گایل',
        lastName: 'کروکلی',
        email: 'gcroxley2@businessinsider.com',
        gender: 'مرد',
    },
    {
        id: 4,
        firstName: 'گراسیا',
        lastName: 'دومگان',
        email: 'gdomegan3@reference.com',
        gender: 'جندر فلوید',
    },
    {
        id: 5,
        firstName: 'گالوین',
        lastName: 'بیرینگر',
        email: 'gberinger4@yellowpages.com',
        gender: 'بی‌جندر',
    },
    {
        id: 6,
        firstName: 'مود',
        lastName: 'آیشسون',
        email: 'maicheson5@ycombinator.com',
        gender: 'مرد',
    },
    {
        id: 7,
        firstName: 'گوئنت',
        lastName: 'دیلی',
        email: 'gdailey6@state.tx.us',
        gender: 'جندر فلوید',
    },
    {
        id: 8,
        firstName: 'ماریوس',
        lastName: 'لمن',
        email: 'mleman7@cnn.com',
        gender: 'جندر فلوید',
    },
    {
        id: 9,
        firstName: 'نتکا',
        lastName: 'وارکو',
        email: 'nvarcoe8@hhs.gov',
        gender: 'مرد',
    },
    {
        id: 10,
        firstName: 'کلی',
        lastName: 'اکرلی',
        email: 'kackerley9@posterous.com',
        gender: 'جندر فلوید',
    },
]


export const dataWithSubRows: PersonWithSubRow[] = [
    {
        firstName: 'ماریا',
        lastName: 'آندرس',
        age: 24,
        visits: 28,
        progress: 56,
        status: 'پیچیده',
        subRows: [
            {
                firstName: 'روزنامه',
                lastName: 'شام',
                age: 25,
                visits: 2,
                progress: 78,
                status: 'مجرد',
                subRows: undefined
            },
            {
                firstName: 'چرم',
                lastName: 'ازدواج',
                age: 3,
                visits: 95,
                progress: 65,
                status: 'مجرد',
                subRows: undefined
            },
            {
                firstName: 'زنبور',
                lastName: 'اختراع',
                age: 7,
                visits: 83,
                progress: 68,
                status: 'پیچیده',
                subRows: undefined
            }
        ]
    },
    {
        firstName: 'فرانسسکو',
        lastName: 'چانگ',
        age: 9,
        visits: 90,
        progress: 77,
        status: 'مجرد',
        subRows: [
            {
                firstName: 'تخت',
                lastName: 'پری‌ها',
                age: 16,
                visits: 82,
                progress: 87,
                status: 'مجرد',
                subRows: undefined
            },
            {
                firstName: 'پارچه',
                lastName: 'کنترل',
                age: 11,
                visits: 8,
                progress: 75,
                status: 'مجرد',
                subRows: undefined
            }
        ]
    },
    {
        firstName: 'رولاند',
        lastName: 'مندل',
        age: 1,
        visits: 16,
        progress: 56,
        status: 'مجرد',
        subRows: [
            {
                firstName: 'روزنامه',
                lastName: 'شام',
                age: 25,
                visits: 2,
                progress: 78,
                status: 'مجرد',
                subRows: undefined
            },
            {
                firstName: 'چرم',
                lastName: 'ازدواج',
                age: 3,
                visits: 95,
                progress: 65,
                status: 'مجرد',
                subRows: undefined
            },
            {
                firstName: 'زنبور',
                lastName: 'اختراع',
                age: 7,
                visits: 83,
                progress: 68,
                status: 'پیچیده',
                subRows: undefined
            },
            {
                firstName: 'مرحله',
                lastName: 'گیلاس‌ها',
                age: 14,
                visits: 94,
                progress: 53,
                status: 'رابطه',
                subRows: undefined
            }
        ]
    },
    {
        firstName: 'هلن',
        lastName: 'بنت',
        age: 43,
        visits: 94,
        progress: 53,
        status: 'مجرد',
        subRows: [
            {
                firstName: 'شال',
                lastName: 'نیاز',
                age: 23,
                visits: 93,
                progress: 40,
                status: 'رابطه',
                subRows: undefined
            }
        ]
    },
    {
        firstName: 'یوشی',
        lastName: 'تناموری',
        age: 37,
        visits: 85,
        progress: 28,
        status: 'مجرد',
        subRows: [
            {
                firstName: 'سینی',
                lastName: 'شیمی',
                age: 29,
                visits: 55,
                progress: 87,
                status: 'رابطه',
                subRows: undefined
            },
            {
                firstName: 'داستان',
                lastName: 'نمره',
                age: 27,
                visits: 98,
                progress: 15,
                status: 'پیچیده',
                subRows: undefined
            }
        ]
    }
]

<script>
    const list = [
        {
            title_en: '',
            title_zh: '3x3',
            headline_en: '',
            headline_zh: '有時候我會更有興趣看一位藝術家的日記和自傳多於他的作品',
            image: './3x3.jpeg',
            year: '2022 May',
            meta: 'Sound installation',
            to: '/works/3x3'
        },
        {
            title_en: 'Armenia Walk',
            title_zh: '當時的頻率',
            headline_en: '',
            headline_zh: '有時候我會更有興趣看一位藝術家的日記和自傳多於他的作品',
            image: './armenia.jpg',
            year: '2019 Feb',
            meta: 'Hand-written diary, video diary',
            to: '/works/armenia'
        },
        {
            title_en: '14 Recurrence',
            title_zh: '14迴',
            headline_en: '',
            headline_zh: '有時候我會更有興趣看一位藝術家的日記和自傳多於他的作品',
            image: './14-recurrence.jpg',
            year: '2017 June',
            meta: 'Performance (with Namiji)',
            to: '/works/14-recurrence'
        },
        {
            title_en: 'Present Continuous',
            title_zh: '現在進行',
            headline_en: 'Physical phenomenon with emotion',
            headline_zh: '能被體驗的物理現象',
            image: './present-continusous-cover.jpg',
            year: '2016 Aug',
            meta: 'Solo Exhibition',
            to: '/works/present-continous'
        },
        // {
        //     title_en: 'WCH Assemblage',
        //     title_zh: '黃竹坑聚疊',
        //     headline_en: 'Physical phenomenon with emotion',
        //     headline_zh: '能被體驗的物理現象',
        //     image: './Assemblage.jpg',
        //     year: '2015',
        //     meta: 'Assemblage',
        //     to: '/works/wch-assemblage'
        // },
        {
            title_en: 'Floating Projects Spatial Pressure Calibration',
            title_zh: '壓力測試',
            headline_en: 'Physical phenomenon with emotion',
            headline_zh: '能被體驗的物理現象',
            image: './fp-spatial-pressure-calibration.png',
            year: '2015',
            meta: 'Performance',
            to: '/works/floating-projects-spatial-pressure-calibration'
        },
        {
            title_en: 'Listen not Listen',
            title_zh: '聽到聽不到',
            headline_en: 'Physical phenomenon with emotion',
            headline_zh: '能被體驗的物理現象',
            image: './listen-not-listen.jpg',
            year: '2015年9月－2016年1月',
            meta: 'Collaborative project on sound',
            to: '/works/listen-not-listen'
        },
        {
            title_en: '_scape',
            title_zh: '空景',
            headline_en: 'Physical phenomenon with emotion',
            headline_zh: '能被體驗的物理現象',
            image: './animoscape2014_2.jpg',
            year: '2014 Aug',
            meta: 'Sound Installation',
            to: '/works/scape'
        },
        {
            title_en: 'The Telescope',
            title_zh: 'The Telescope',
            headline_en: 'Physical phenomenon with emotion',
            headline_zh: '能被體驗的物理現象',
            image: './the-telescope.jpg',
            year: '2012 Aug',
            meta: 'Sound Installation',
            to: '/works/the-telescope'
        }
    ]
</script>

<div class="py-4 px-4 text-slate-700">
    {#each list as item}
        <a href={item.to} class="my-8 flex block">
            <img class="w-28 rounded mr-4" src={item.image} alt={item.title_zh}>
            <div>
                <p class="text-xs">{item.year}</p>
                <p class="text-xs text-slate-500 uppercase">{item.meta}</p>
                <p class="text-lg mt-1 leading-tight">{item.title_zh}</p>
                <p class="leading-tight">{item.title_en}</p>
            </div>
        </a>
    {/each}
</div>

<svelte:head>
    <title>fukkuen</title>
</svelte:head>
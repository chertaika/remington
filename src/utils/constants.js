const testContent = [
  {
    shop_id: '1',
    title: 'Remington 7.62',
    description: 'Вся одежда Remington выполнена из технологичных материалов: не промокает, не продувается, устойчива к механическим повреждениям, обладает хорошими дышащими свойствами, отличный вариант одежды для охоты и рыбалки.\n'
      + 'В моделях предусмотрены все необходимые функциональные элементы, которые заменяют дополнительную экипировку. Вы просто получаете максимальное удовольствие от вашего хобби.',
    vk_link: 'https://vk.com/remington7_62_tomsk',
    slug: 'remington',
    address: 'ТРЦ "Изумрудный город"'
      + 'г. Томск, пр. Комсомольский, 13Б'
      + 'Режим работы: с 10:00 до 22:00 ч',
    images: [
      'https://ekipirovka70.ru/storage/cache/shops_img_1_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_2_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_3_1_1350_760.webp',
    ],
    goods: [
      {
        good_id: '1',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '2',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '3',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '4',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '5',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
    ],
  },
  {
    shop_id: '2',
    title: 'Remington 7.62',
    description: 'Вся одежда Remington выполнена из технологичных материалов: не промокает, не продувается, устойчива к механическим повреждениям, обладает хорошими дышащими свойствами, отличный вариант одежды для охоты и рыбалки.\n'
      + 'В моделях предусмотрены все необходимые функциональные элементы, которые заменяют дополнительную экипировку. Вы просто получаете максимальное удовольствие от вашего хобби.',
    vk_link: 'https://vk.com/remington7_62_tomsk',
    slug: 'remington',
    address: 'ТРЦ "Изумрудный город"'
      + 'г. Томск, пр. Комсомольский, 13Б'
      + 'Режим работы: с 10:00 до 22:00 ч',
    images: [
      'https://ekipirovka70.ru/storage/cache/shops_img_1_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_2_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_3_1_1350_760.webp',
    ],
    goods: [
      {
        good_id: '1',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '2',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '3',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '4',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '5',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
    ],
  },
  {
    shop_id: '3',
    title: 'Remington 7.62',
    description: 'Вся одежда Remington выполнена из технологичных материалов: не промокает, не продувается, устойчива к механическим повреждениям, обладает хорошими дышащими свойствами, отличный вариант одежды для охоты и рыбалки.\n'
      + 'В моделях предусмотрены все необходимые функциональные элементы, которые заменяют дополнительную экипировку. Вы просто получаете максимальное удовольствие от вашего хобби.',
    vk_link: 'https://vk.com/remington7_62_tomsk',
    slug: 'remington',
    address: 'ТРЦ "Изумрудный город"'
      + 'г. Томск, пр. Комсомольский, 13Б'
      + 'Режим работы: с 10:00 до 22:00 ч',
    images: [
      'https://ekipirovka70.ru/storage/cache/shops_img_1_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_2_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_3_1_1350_760.webp',
    ],
    goods: [
      {
        good_id: '1',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '2',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '3',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '4',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '5',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
    ],
  },
  {
    shop_id: '4',
    title: 'Remington 7.62',
    description: 'Вся одежда Remington выполнена из технологичных материалов: не промокает, не продувается, устойчива к механическим повреждениям, обладает хорошими дышащими свойствами, отличный вариант одежды для охоты и рыбалки.\n'
      + 'В моделях предусмотрены все необходимые функциональные элементы, которые заменяют дополнительную экипировку. Вы просто получаете максимальное удовольствие от вашего хобби.',
    vk_link: 'https://vk.com/remington7_62_tomsk',
    slug: 'remington',
    address: 'ТРЦ "Изумрудный город"'
      + 'г. Томск, пр. Комсомольский, 13Б'
      + 'Режим работы: с 10:00 до 22:00 ч',
    images: [
      'https://ekipirovka70.ru/storage/cache/shops_img_1_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_2_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_3_1_1350_760.webp',
    ],
    goods: [
      {
        good_id: '1',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '2',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '3',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '4',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '5',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
    ],
  },
  {
    shop_id: '5',
    title: 'Remington 7.62',
    description: 'Вся одежда Remington выполнена из технологичных материалов: не промокает, не продувается, устойчива к механическим повреждениям, обладает хорошими дышащими свойствами, отличный вариант одежды для охоты и рыбалки.\n'
      + 'В моделях предусмотрены все необходимые функциональные элементы, которые заменяют дополнительную экипировку. Вы просто получаете максимальное удовольствие от вашего хобби.',
    vk_link: 'https://vk.com/remington7_62_tomsk',
    slug: 'remington',
    address: 'ТРЦ "Изумрудный город"'
      + 'г. Томск, пр. Комсомольский, 13Б'
      + 'Режим работы: с 10:00 до 22:00 ч',
    images: [
      'https://ekipirovka70.ru/storage/cache/shops_img_1_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_2_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_3_1_1350_760.webp',
    ],
    goods: [
      {
        good_id: '1',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '2',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '3',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '4',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '5',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
    ],
  },
  {
    shop_id: '6',
    title: 'Remington 7.62',
    description: 'Вся одежда Remington выполнена из технологичных материалов: не промокает, не продувается, устойчива к механическим повреждениям, обладает хорошими дышащими свойствами, отличный вариант одежды для охоты и рыбалки.\n'
      + 'В моделях предусмотрены все необходимые функциональные элементы, которые заменяют дополнительную экипировку. Вы просто получаете максимальное удовольствие от вашего хобби.',
    vk_link: 'https://vk.com/remington7_62_tomsk',
    slug: 'remington',
    address: 'ТРЦ "Изумрудный город"'
      + 'г. Томск, пр. Комсомольский, 13Б'
      + 'Режим работы: с 10:00 до 22:00 ч',
    images: [
      'https://ekipirovka70.ru/storage/cache/shops_img_1_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_2_1_1350_760.webp',
      'https://ekipirovka70.ru/storage/cache/shops_img_3_1_1350_760.webp',
    ],
    goods: [
      {
        good_id: '1',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '2',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '3',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '4',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
      {
        good_id: '5',
        title: 'Эльбрус костюм (хлопок, хаки)',
        price: 7650,
        description: 'Ветрозащитный и водонепроницаемый костюм Remington Fishing II Suit.\n'
          + 'Отличается богатым функционалом и современным дизайном. Благодаря проклеенным швам и водоотталкивающей обработке может использоваться в качестве дождевика. Куртка\n'
          + '• Четыре наружных кармана с молниями, которые защищают от попадания воды и влаги \n'
          + '• Регулируемые манжеты на рукавах\n'
          + '• Воротник стойка со светоотражающими элементами\n'
          + '• Рукава со светоотражающими элементами Брюки\n'
          + '• Штаны-комбинезон с влагозащитной молнией\n'
          + '• Регулируемые манжеты на щиколотках.\n'
          + ' Костюм имеет множество удобных карманов на куртке и брюках, а также на них есть боковые молнии.',
        image: 'https://ekipirovka70.ru/storage/cache/goods_1_610_610.webp',
      },
    ],
  },

];

export default testContent;

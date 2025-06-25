document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item')

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')
    const iconImg = questionBtn.querySelector('.plus img')

    questionBtn.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open')

      // Сначала закрываем все ответы
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector('.faq-answer')
        const otherIcon = otherItem.querySelector('.plus img')

        otherAnswer.classList.remove('open')
        otherIcon.src = 'image/+.svg' // Возвращаем иконку "+"
      })

      // Если клик был по уже открытому — просто закрыли и вышли
      if (isOpen) return

      // Иначе открываем текущий и меняем иконку
      answer.classList.add('open')
      iconImg.src = 'image/x.svg' // Путь к иконке "×" — замени на свой!
    })
  })





  // Слайдер 1 для .realphoto2
  const photoBlock1 = document.querySelector('.realphoto2')
  const prevBtn1 = document.getElementById('prev')
  const nextBtn1 = document.getElementById('next')
  const images1 = [
    'image/realphoto1.png',
    'image/realphoto2.png',
    'image/realphoto3.png'
  ]
  let currentIndex1 = 0

  function updateBackground1() {
    photoBlock1.style.backgroundImage = `url('${images1[currentIndex1]}')`
  }

  prevBtn1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length
    updateBackground1()
  })

  nextBtn1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 + 1) % images1.length
    updateBackground1()
  })

  updateBackground1()

  // Слайдер 2 для .teamphoto
  const photoBlock2 = document.querySelector('.teamphoto')
  const prevBtn2 = document.getElementById('prevTeam')
  const nextBtn2 = document.getElementById('nextTeam')
  const images2 = [
    'image/image10.png',
    'image/image11.png',
    'image/image12.png'
  ]
  let currentIndex2 = 0

  function updateBackground2() {
    photoBlock2.style.backgroundImage = `url('${images2[currentIndex2]}')`
  }

  prevBtn2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length
    updateBackground2()
  })

  nextBtn2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % images2.length
    updateBackground2()
  })

  updateBackground2()

  // Слайдер 3 для .reviewsphoto
  const photoBlock3 = document.querySelector('.reviewsphoto')
  const prevBtn3 = document.getElementById('prevReviews')
  const nextBtn3 = document.getElementById('nextReviews')

  // Массив с изображениями (с расширением)
  const images3 = [
    'image/image20.png', // Добавьте расширение файла
    'image/image21.png' // Добавьте расширение файла
  ]

  let currentIndex3 = 0

  // Функция обновления фона
  function updateBackground3() {
    photoBlock3.style.backgroundImage = `url('${images3[currentIndex3]}')`
  }

  // Обработчик события на кнопке "prev"
  prevBtn3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length
    updateBackground3()
  })

  // Обработчик события на кнопке "next"
  nextBtn3.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 + 1) % images3.length
    updateBackground3()
  })

  // Установить начальное изображение
  updateBackground3()







})










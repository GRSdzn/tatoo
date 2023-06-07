import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './adaptiv.css';
import './style.css';

import faq from './img/faq.png'
import security from './img/безопасность.svg';
import quality from './img/качество.svg';
import masters from './img/мастера.svg';
import colors from './img/красители.svg';
import connection from './img/связь.svg';
import materials from './img/материалы.svg';
import komfort from './img/комфорт.svg';
import location from './img/локация.svg';


// Импортируем фото import <Название задаем любое> from './путь до фото';
//<img src={Название которое придумала} alt="" />

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/api/artists/') // Fetch all artists
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>

      <header>
        <div className="header__container">
          <a href="#" className="header__logo"><img src="img/Лого.svg" alt="" /></a>

          <div className="header__menu menu">
            <div className="menu__icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item"><a href="#price" className="menu__link">прайс</a></li>
                <li className="menu__item"><a href="#masters" className="menu__link">мастера</a></li>
                <li className="menu__item"><a href="#gallery" className="menu__link">работы</a></li>
                <li className="menu__item"><a href="#" className="menu__link">контакты</a></li>
              </ul>
            </nav>
          </div>

          <div className="header__location"><p>Ростов-на-Дону, Газетный пер., 55а</p></div>
        </div>

      </header>

      <main>
        <section className="first_screen">
          <div className="first_screen__block _conteiner">
            <div className="fs_left">
              <div className="fs_left__name">
                <h1>Tattoo</h1>
                <h2>-  здесь оживают ваши мечты !</h2>
                <p>Запишись к нам на <span>бесплатную консультацию</span> и получи <span>скидку 15%</span> на первый сеанс тату</p>
                <a href="">Записаться</a>
              </div>

              <div className="fs_left__contact">
                <p>Вы можете свяваться с нами по телефону</p>
                <p>+7 (989) 535-98-75</p>
              </div>
            </div>
            <div className="fs_reight"><img src="img/tatto_b1.png" alt="" /></div>
          </div>

        </section>

        <section>
          <div className="about__block _conteiner">
            <div className="ab_img"><img src="img/тату-краска.png" alt="" /></div>

            <div className="about__block_content">

              <div>
                <div className="ab_title">
                  <h2>Кто мы</h2>
                </div>

                <div className="ab_text">
                  <p>Тату-салон расположенный в самом центре города Ростове-на-Дону "Outline tatto" - это не только команда профессиональных мастеров с многолетним опытом и качественным портфолио, но и комфортный салон, где мы предложим отдохнуть между сеансами и включить вашу любимую музыку.</p>
                  <br /><p>Для нас нанесение татуировок - особое художественное искусство, поэтому в каждую работу мы вкладываем душу.</p>
                </div>
              </div>

              <div className="ab_facts">
                <div className="ab_fact"><span> 1000</span><span>довольных клиентов</span></div>
                <div className="ab_fact"><span> 200</span><span>реальных отзывов</span></div>
                <div className="ab_fact"><span>12</span><span>мастеров</span></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="reason_block3 _conteiner">
            <div className="reason_b3__title">
              <h2>Почему клиенты выбирают нас</h2>
            </div>

            <div className="reason_b3__cards">
              <div className="reason__card">
                <div className="card_img"><img src={security} alt="" /></div>
                <h3>Безопасность</h3>
                <p>Предоставляем заживляющую пленку и обезбаливающую мазь</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={quality} alt="" /></div>
                <h3>Качество</h3>
                <p>Создадим тату с учетом индивидуальных потребностей клиента</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={masters} alt="" /></div>
                <h3>Мастера</h3>
                <p>Тату-мастера с опытом более 5 лет, которые регулярно повышают уровень мастерства</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={colors} alt="" /></div>
                <h3>Безопасные красители</h3>
                <p>Мы используем стойкие красители соответствующие всем гигиеническим требованиям</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={materials} alt="" /></div>
                <h3>Материалы</h3>
                <p>Сертифицированное зарубежное оборудование и стерильные одноразовые расходники</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={komfort} alt="" /></div>
                <h3>Комфорт</h3>
                <p>У нас вы можете выпить чай, кофе, и посмотрель свой любимый фильм или музыку во время сеанса</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={location} alt="" /></div>
                <h3>Местоположение</h3>
                <p>Студия находится в самом центре города, 5 мин от ул. Большая Садовая</p>
              </div>
              <div className="reason__card">
                <div className="card_img"><img src={connection} alt="" /></div>
                <h3>Обратная связь</h3>
                <p>Мы поддерживаем обратную связь с клиентом на всех этапах создания тату</p>
              </div>
            </div>
          </div>
        </section>

        <section id="masters">
          <div className="masters_block4 _conteiner">
            <div className="masters_b4__title">
              <h2>Мастера</h2>
            </div>

            <div className="wrapper">
              <i id="left" className="fa-solid fa-angle-left"></i>
              <ul className="carousel">
                {artists.map((artist, index) => (
                  <li key={index} className="card">
                    <div className="img"><img src={artist.image} alt="img" draggable="false" /></div>
                    <h2>{artist.first_name + ' ' + artist.last_name}</h2>
                    <span>{artist.role}</span>
                  </li>
                ))}
              </ul>
              <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </section>

        <section className="price__screen" id="price">
          <div className="price _conteiner">

            <h2 className="price_title">Прайс</h2>

            <div className="price_table">

              <div className="price__content left">

                <div className="price__card">

                  <h3 className="card__title">Татуировка</h3>

                  <div className="card__line">
                    <p>Консультация</p>
                    <hr />
                    <p>бесплатно</p>
                  </div>
                  <div className="card__line">
                    <p>Разработка индивидуального эскиза</p>
                    <hr />
                    <p>бесплатно</p>
                    <div>при выполнении татуировки в нашей студии</div>
                  </div>
                  <div className="card__line">
                    <p>Минимальная стоимость</p>
                    <hr />
                    <p>от 3000 ₽</p>
                  </div>
                  <div className="card__line">
                    <p>Стоимость 3-х часового сеанса</p>
                    <hr />
                    <p>от 6000 ₽</p>
                    <div>тату до 15см</div>
                  </div>
                  <div className="card__line">
                    <p>Стоимость 6-х часового сеанса</p>
                    <hr />
                    <p>от 12000 ₽</p>
                    <div>тату до 25см</div>
                  </div>
                  <div className="card__line">
                    <p>Стоимость сеанса на весь день</p>
                    <hr />
                    <p>от 18000 ₽</p>
                    <div>на стоимость влияет: квалификация мастера,<br /> размер и детализация работы</div>
                  </div>
                  <div className="card__line">
                    <p>Первичная коррекция после сеанса</p>
                    <hr />
                    <p>от 1500 ₽</p>
                  </div>

                </div>

                <div className="price__card">

                  <h3 className="card__title">Мастер-класс</h3>

                  <div className="card__line">
                    <p>Обучение тату</p>
                    <hr />
                    <p>35000 ₽</p>
                  </div>

                </div>

              </div>

              <div className="price__content reight">

                <div className="price__card">

                  <h3 className="card__title">Пирсинг</h3>

                  <div className="card__line">
                    <p>Замена украшения</p>
                    <hr />
                    <p>600 ₽</p>
                  </div>
                  <div className="card__line">
                    <p>Прочистка пирсинг канала</p>
                    <hr />
                    <p>700 ₽</p>
                  </div>
                  <div className="card__line">
                    <p>Восстановление, растяжка канала</p>
                    <hr />
                    <p>1500 ₽</p>
                  </div>
                  <div className="card__line">
                    <p>Обезбаливание (спрей или крем)</p>
                    <hr />
                    <p>500 ₽</p>

                  </div>

                </div>

                <div className="price__card">

                  <h3 className="card__title">Прочее</h3>

                  <div className="card__line">
                    <p>Подарочный сертификат<br />на любую сумму</p>
                    <hr />
                    <p>от 1000 ₽</p>
                  </div>

                  <div className="card__line">
                    <p>Обезболивающий крем ТКТХ</p>
                    <hr />
                    <p>800 ₽</p>
                  </div>

                  <div className="card__line">
                    <p>Заживляющая плёнка<br /> Suprasorb (10 см)</p>
                    <hr />
                    <p>200 ₽</p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="_conteiner">
            <div className="FAQ-title">
              <h2>FAQ</h2>
            </div>
            <div className="FAQ">
              <div className="FAQ-img"><img src={faq} alt="" /></div>
              <div className="FAQ-accordion">
                <div className="accordion">
                  <div data-tab="tab-1" className="accordion__title">
                    <h3>Как рассчитывается стоимость тату?</h3>
                    <span></span>
                  </div>
                  <div id="tab-1" className="accordion__content">
                    Стоимость татуировки складывается из следующих факторов, таких как
                    размер изображения, область нанесения рисунка,
                    сложность эскиза, стиль татуировки, количество сеансов для
                    завершения работы.<br /><br />Окончательную стоимость татуировки можно узнать только после
                    личной встречи – консультации с мастером.
                  </div>
                </div>
                <div className="accordion">
                  <div data-tab="tab-2" className="accordion__title">
                    <h3>Как мне подготовиться к сеансу?</h3>
                    <span></span>
                  </div>
                  <div id="tab-2" className="accordion__content">
                    Есть несколько простых правил которые позволяют максимально комфортно
                    чувствовать себя в процессе нанесения татуировки:<br /><br />
                    <ol>
                      <li> За сутки до сеанса начните пить воду в достаточных количествах и не допускайте обезвоживания вашего организма.</li><br />
                      <li> Если у вас сухая кожа, за неделю до сеанса начните использовать увлажняющий крем.</li><br />
                      <li> Наденьте максимально удобную одежду свободного кроя. Одежда должна быть комфортной и обеспечивать прямой доступ к области нанесения рисунка.</li><br />
                      <li> Перед сеансом татуировки очень важно плотно поесть. Голод в сочетании с волнением не лучший вариант.</li><br />
                      <li> За сутки до сеанса не употребляйте алкоголь и избегайте физических нагрузок.</li>
                    </ol>

                  </div>
                </div>
                <div className="accordion">
                  <div data-tab="tab-3" className="accordion__title">
                    <h3>На сколько это больно?</h3>
                    <span></span>
                  </div>
                  <div id="tab-3" className="accordion__content">
                    Зачастую болезненные ощущения сильнее выражены в начале процесса нанесения, первые 10–15 минут,
                    потом тело привыкает и ближайшие часа три достаточно спокойно переносит процесс травматизации кожи.
                    Поэтому сеанс обычно не длится дольше четырёх часов, хотя всё индивидуально и зависит от вашего болевого,
                    места нанесения и общего состояния организма.<br /><br />

                    Доверте процесс нанесения тату нам и мы в свою очередь сделаем все для того, чтобы вы чувствовали
                    себя комфортно.
                  </div>
                </div>
                <div className="accordion">
                  <div data-tab="tab-4" className="accordion__title">
                    <h3>Можно сделать перерыв во время сеанса?</h3>
                    <span></span>
                  </div>
                  <div id="tab-4" className="accordion__content">
                    Да, зачастую один сеанс татуировки может длиться по времени до 4-х часов и большие по площади эскизы выполняются
                    за несколько сеансов. Перерыв между ними должен составлять как минимум 5-10 дней.
                    Но вы можете попросить мастера сделать перерыв во время сеанса и передохнуть, за дополнительное время мы не взымаем плату.
                  </div>
                </div>
                <div className="accordion">
                  <div data-tab="tab-5" className="accordion__title">
                    <h3>Есть ли возрастные ограничения?</h3>
                    <span></span>
                  </div>
                  <div id="tab-5" className="accordion__content">
                    Тату можно делать строго с 18 лет, когда человек является совершеннолетним и уже несет
                    полную правовую ответственность за свои поступки и действия. Кроме того,
                    к 18-ти годам завершается процесс активного роста тела, поэтому уменьшается
                    вероятность деформации татуировки с возрастом.
                  </div>
                </div>
                <div className="accordion">
                  <div data-tab="tab-6" className="accordion__title">
                    <h3>Зачем нужна коррекция татуировки?</h3>
                    <span></span>
                  </div>
                  <div id="tab-6" className="accordion__content">
                    Первичная коррекция татуировки после заживления необходима практически всегда,
                    в особенности, когда речь идет о цветных тату или сложных рисунках.
                    Каким бы высококлассным специалистом не был мастер, и с каким бы современным
                    оборудованием он не работал, особенности кожи таковы, что после заживления
                    тату пигмент может выпадать.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="container">

            <div className="gallery-title">
              <h2>Наши работы</h2>
              <h3>Выберите интересующее вас направление</h3>
            </div>

            <div className="gallery-filter">
              <span className="filter-item active" data-filter="all">ALL</span>
              <span className="filter-item" data-filter="new_school">New school</span>
              <span className="filter-item" data-filter="linework">Linework</span>
              <span className="filter-item" data-filter="graphic">Graphic</span>
              <span className="filter-item" data-filter="anime">Anime</span>
            </div>

            <div className="row">

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/4.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item ">
                <div className="gallery-item-inner">
                  <img src="img/11.jpg" alt="" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/16.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/14.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item graphic">
                <div className="gallery-item-inner">
                  <img src="img/3.jpg" alt="graphic" />
                </div>
              </div>

              <div className="gallery-item linework">
                <div className="gallery-item-inner">
                  <img src="img/18.jpg" alt="linework" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/9.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item linework">
                <div className="gallery-item-inner">
                  <img src="img/19.jpg" alt="linework" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/24.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item linework">
                <div className="gallery-item-inner">
                  <img src="img/22.jpg" alt="linework" />
                </div>
              </div>

              <div className="gallery-item linework">
                <div className="gallery-item-inner">
                  <img src="img/28.jpg" alt="linework" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/8.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item graphic">
                <div className="gallery-item-inner">
                  <img src="img/5.jpg" alt="graphic" />
                </div>
              </div>

              <div className="gallery-item anime">
                <div className="gallery-item-inner">
                  <img src="img/6.jpg" alt="anime" />
                </div>
              </div>

              <div className="gallery-item anime">
                <div className="gallery-item-inner">
                  <img src="img/15.jpg" alt="anime" />
                </div>
              </div>

              <div className="gallery-item anime">
                <div className="gallery-item-inner">
                  <img src="img/26.jpg" alt="anime" />
                </div>
              </div>

              <div className="gallery-item graphic">
                <div className="gallery-item-inner">
                  <img src="img/12.jpg" alt="graphic" />
                </div>
              </div>

              <div className="gallery-item graphic">
                <div className="gallery-item-inner">
                  <img src="img/17.jpg" alt="graphic" />
                </div>
              </div>

              <div className="gallery-item graphic">
                <div className="gallery-item-inner">
                  <img src="img/21.jpg" alt="graphic" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/23.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/30.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/20.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item linework">
                <div className="gallery-item-inner">
                  <img src="img/1.jpg" alt="linework" />
                </div>
              </div>

              <div className="gallery-item new_school">
                <div className="gallery-item-inner">
                  <img src="img/2.jpg" alt="new_school" />
                </div>
              </div>

              <div className="gallery-item">
                <div className="gallery-item-inner">
                  <img src="img/29.jpg" alt="" />
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
      <footer></footer>

    </div>
  );
}

export default App;
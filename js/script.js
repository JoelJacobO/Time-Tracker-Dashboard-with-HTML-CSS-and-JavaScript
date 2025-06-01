const xhr = new XMLHttpRequest();
xhr.open("GET", "./data.json");
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
     <article class="card card__work">
            <span class="card__icon"
              ><img src="./images/icon-work.svg" alt=""
            /></span>
            <div class="card__content">
              <div class="card__title">
                <h3>${data[0].title}</h3>
                <img src="./images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="card__time">
                <h2>${hourStrs(data[0].timeframes.weekly.current)}</h2>
                <p>Last week - ${hourStrs(
                  data[0].timeframes.weekly.previous
                )}</p>
              </div>
            </div>
          </article>
          <article class="card card__play">
            <span class="card__icon"
              ><img src="./images/icon-play.svg" alt=""
            /></span>
            <div class="card__content">
              <div class="card__title">
               <h3>${data[1].title}</h3>
                <img src="./images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="card__time">
               <h2>${hourStrs(data[1].timeframes.weekly.current)}</h2>
                <p>Last week - ${hourStrs(
                  data[1].timeframes.weekly.previous
                )}</p>
              </div>
            </div>
          </article>
          <article class="card card__study">
            <span class="card__icon"
              ><img src="./images/icon-study.svg" alt=""
            /></span>
            <div class="card__content">
              <div class="card__title">
              <h3>${data[2].title}</h3>
                <img src="./images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="card__time">
               <h2>${hourStrs(data[2].timeframes.weekly.current)}</h2>
                <p>Last week - ${hourStrs(
                  data[2].timeframes.weekly.previous
                )}</p>
              </div>
            </div>
          </article>
          <article class="card card__exercise">
            <span class="card__icon"
              ><img src="./images/icon-exercise.svg" alt=""
            /></span>
            <div class="card__content">
              <div class="card__title">
               <h3>${data[3].title}</h3>
                <img src="./images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="card__time">
                  <h2>${hourStrs(data[3].timeframes.weekly.current)}</h2>
                <p>Last week - ${hourStrs(
                  data[3].timeframes.weekly.previous
                )}</p>
              </div>
            </div>
          </article>

          <article class="card card__social">
            <span class="card__icon"
              ><img src="./images/icon-social.svg" alt=""
            /></span>
            <div class="card__content">
              <div class="card__title">
                <h3>${data[4].title}</h3>
                <img src="./images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="card__time">
                <h2>${hourStrs(data[4].timeframes.weekly.current)}</h2>
                <p>Last week - ${hourStrs(
                  data[4].timeframes.weekly.previous
                )}</p>
              </div>
            </div>
          </article>
          <article class="card card__selfcare">
            <span class="card__icon"
              ><img src="./images/icon-self-care.svg" alt=""
            /></span>
            <div class="card__content">
              <div class="card__title">
                 <h3>${data[5].title}</h3>
                <img src="./images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="card__time">
                 <h2>${hourStrs(data[5].timeframes.weekly.current)}</h2>
                <p>Last week - ${hourStrs(
                  data[5].timeframes.weekly.previous
                )}</p>
              </div>
            </div>
          </article>
     `;
    document
      .querySelector(".main-container")
      .insertAdjacentHTML("afterbegin", html);
  }
};

xhr.send();
function hourStrs(num) {
  const hourStr = num <= 1 ? `${num}hr` : `${num}hrs`;
  return hourStr;
}

import {AiOutlineHeart} from "react-icons/ai"

const Card = () => {
    return (
        <div className="card">
            <span className="card__fav">
                <AiOutlineHeart/>
            </span>
            <img src="" alt="" className="card__image"/>
            <h3 className="card__title">
                Валенсия Beige
            </h3>
            <p className="card__category">
                Барные стулья
            </p>
            <p className="card__price">
                2 300₽
            </p>
            <div className="card__sizes">
                <h4 className="card__sizes-title">
                    Размеры
                </h4>
                <div className="card__sizes-info">
                    <p className="card__sizes-size">
                        <span>ШИРИНА</span>
                        43 СМ
                    </p>
                    x
                    <p className="card__sizes-size">
                        <span>ГЛУБИНА</span>
                        43 СМ
                    </p>
                    x
                    <p className="card__sizes-size">
                        <span>77 СМ</span>
                        43 СМ
                    </p>
                </div>
                <button className="card__sizes-btn">
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default Card;
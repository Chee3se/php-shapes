import styles from './Shape.module.css';

function Shape(props) {
    const object = props.object;
    return (
        <div className={styles.object} style={
            {
                width: `${object.radius !== undefined ? (object.radius * 2 * 80).toFixed(1) : (object.width * 80)}px`,
                height: `${object.radius !== undefined ? (object.radius * 2 * 80).toFixed(1) : (object.height * 80)}px`,
                backgroundColor: object.color,
                borderRadius: object.radius !== undefined ? '50%' : '0',
            }
        }> <p className={styles.text}>{object.area.toFixed(1)}</p>
        </div>
    );
};

export default Shape;

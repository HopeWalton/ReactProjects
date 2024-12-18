import './index.css';

const Content = ({colorName, hexValue, isDarkText }) => {

    return (

        <section className='colorViewer'
            style={{
                backgroundColor: colorName,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{colorName ? colorName : 'Empty'}</p>
            <p>{hexValue ? hexValue : null}</p>

        </section>
    )

}

export default Content
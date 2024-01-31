import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
    const { marca, ano_lancamento } = props;

    return (
        <li>
            {marca} - {ano_lancamento}
        </li>
    );
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
};

export default Item;

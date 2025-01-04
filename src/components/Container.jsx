import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className='max-w-[1368px] mx-auto px-4 xl:px-0'>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
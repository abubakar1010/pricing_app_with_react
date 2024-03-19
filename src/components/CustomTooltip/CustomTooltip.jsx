import PropTypes from 'prop-types'

const CustomTooltip = ({studentsMarks,getName}) => {
    return (
        <>
        {
            studentsMarks.map( mark => <div key={mark.id}>
                <h1>{mark.name} {getName(mark.math)}</h1>
                <h1>{mark.name} get {mark.physics} in Physics and {studentsMarks.chemistry} in chemistry </h1>
                <h1>Total mark of {mark.name} { mark.math + mark.chemistry}</h1>
                </div>)
        }
            
        </>
    );
};

CustomTooltip.propTypes = {

    studentsMarks: PropTypes.object,
    getName: PropTypes.func
}

export default CustomTooltip;
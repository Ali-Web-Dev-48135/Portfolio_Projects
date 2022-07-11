


const ThankYou = ({firstName, lastName, className}) => {
    return(
        <div className={className}>
            <p>Thank You {firstName} {lastName} Your Order Has Been Placed.</p>
        </div>
    )

};

export default ThankYou;
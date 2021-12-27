
import PropTypes from 'prop-types';
import { PureComponent, Fragment } from 'react';

import './ProgressBar.style';

export class ProgressBar extends PureComponent {
    constructor(props) {
        super(props)
        this.renderSteps = this.renderSteps.bind(this)


    }
    static propTypes = {
        steps: PropTypes.object.isRequired,
    };

    static defaultProps = {
        steps: []
    };


    renderSteps() {
        const stepsArr = Object.keys(this.props.steps).map(step => step.split("_")[0].toLowerCase())
        console.log({ steps: stepsArr })
        const stepsArrLastIndex = stepsArr.length - 1
        const currentStep = this.props.currentStep

        return (
            stepsArr.map((step, stepIndex) => (
                <Fragment key={`step-${step}-index${stepIndex}`}>
                    <span className={`progressLine ${currentStep >= stepIndex ? 'active' : ""}`}></span>
                    {stepIndex !== stepsArrLastIndex && (<div className={`stepDetail ${currentStep >= stepIndex ? 'active' : ""}`}>
                        <span className="stepNumber">
                            {currentStep > stepIndex ?
                                <img src="/vectors/check.svg" alt="check-icon" />
                                :
                                (stepIndex + 1)
                            }
                        </span>
                        <span className='stepName'>{step}</span>
                    </div>)}
                </Fragment>
            ))
        )

    }

    render() {
        //  const { onBillingSuccess, onBillingError } = this.props;

        return (
            //  <Form
            //    mix={ { block: 'CheckoutBilling' } }
            //    id={ BILLING_STEP }
            //    onSubmitError={ onBillingError }
            //    onSubmitSuccess={ onBillingSuccess }
            //  >
            //      { this.renderAddresses() }
            //      { this.renderPayments() }
            //      { this.renderTermsAndConditions() }
            //      { this.renderActions() }
            //      { this.renderPopup() }
            //  </Form>
            <div className='ProgressBar'>
                {this.renderSteps()}
            </div>
        );
    }
}

export default ProgressBar;

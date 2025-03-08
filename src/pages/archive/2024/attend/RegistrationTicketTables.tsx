import { TextBadge } from '@/components/badge/TextBadge';
import { Switch } from '@headlessui/react';
import { Dispatch, SetStateAction, useState } from 'react';

const Price = ({ val }: { val: number }) => {
  return <td>{val}</td>;
};

const ToggleSwitch = ({
  enabled,
  setEnabled,
}: {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-green-700 dark:bg-green-400/60' : 'bg-gray-400/30'
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span className='sr-only'>
        Toggle for showing ticket prices with fees
      </span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-3 w-3 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

const PriceElement = ({
  val,
  fee,
  showFee,
}: {
  val: number;
  fee: number;
  showFee: boolean;
}) => {
  return showFee ? (
    <td
      className='text-teal-800 dark:text-teal-100 cursor-help'
      title={`Price shown includes a transaction fee of $${fee.toFixed(
        2,
      )} per ticket.`}
    >
      ${(val + fee).toFixed(2)}
    </td>
  ) : (
    <td
      className='cursor-help'
      title={`Price shown does not include a $${fee.toFixed(
        2,
      )} transaction fee.`}
    >
      ${val} <span className='opacity-80 text-[12px]'> + Fees</span>
    </td>
  );
};

const TicketFeeElement = ({
  showFee,
  setShowFee,
}: {
  showFee: boolean;
  setShowFee: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <span className='flex flex-col md:flex-row w-full text-left max-w-[700px]'>
      <span className='grow'>
        Tickets are{' '}
        <span
          className='text-nav-pink cursor-help'
          title='Approx. 6.08% + $1.32/ticket'
        >
          subject to a fee
        </span>{' '}
        {showFee
          ? 'included in the prices shown.'
          : 'not currently shown below.'}
      </span>
      <span className='flex gap-x-2'>
        <span className='order-2 md:order-none md:ml-6'>
          Show Prices w/ Fees
        </span>
        <span>
          <ToggleSwitch enabled={showFee} setEnabled={setShowFee} />
        </span>
      </span>
    </span>
  );
};

export const CollegiateTable = () => {
  const [showFee, setShowFee] = useState(false);

  return (
    <div>
      <TicketFeeElement
        showFee={showFee}
        setShowFee={setShowFee}
      ></TicketFeeElement>
      <div className='overflow-x-auto'>
        <table className='text-center table-mb md:w-[700px]'>
          <thead>
            <tr className='bg-green-400/30'>
              <th>Ticket Type</th>
              <th>Purchase Deadline</th>
              <th>Member Price</th>
              <th>Non-Member Price</th>
            </tr>
          </thead>
          <tbody className='[&>*:nth-child(2n)]:bg-green-400/15'>
            <tr>
              <td>
                Collegiate Full{' '}
                <TextBadge className='border-nav-green text-nav-green'>
                  Early Bird
                </TextBadge>
              </td>
              <td>June 30, 2024</td>
              <PriceElement
                val={150}
                fee={10.44}
                showFee={showFee}
              ></PriceElement>
              <PriceElement val={225} fee={15} showFee={showFee}></PriceElement>
            </tr>
            <tr>
              <td>
                Collegiate Full{' '}
                <TextBadge className='border-text-color'>Regular</TextBadge>
              </td>
              <td>September 30, 2024</td>
              <PriceElement
                val={175}
                fee={11.96}
                showFee={showFee}
              ></PriceElement>
              <PriceElement
                val={250}
                fee={16.52}
                showFee={showFee}
              ></PriceElement>
            </tr>
            <tr>
              <td>
                Collegiate Full{' '}
                <TextBadge className='border-text-color text-gray-700 dark:text-gray-400'>
                  On Site
                </TextBadge>
              </td>
              <td>(On Site)</td>
              <PriceElement
                val={275}
                fee={18.04}
                showFee={showFee}
              ></PriceElement>
              <PriceElement
                val={275}
                fee={18.04}
                showFee={showFee}
              ></PriceElement>
            </tr>
            <tr>
              <td>
                Advisor Full{' '}
                <TextBadge className='border-nav-green text-nav-green'>
                  Early Bird
                </TextBadge>
              </td>
              <td>June 30, 2024</td>
              <PriceElement
                val={225}
                fee={15.0}
                showFee={showFee}
              ></PriceElement>
              <td>n/a</td>
            </tr>
            <tr>
              <td>
                Advisor Full{' '}
                <TextBadge className='border-text-color'>Regular</TextBadge>
              </td>
              <td>September 30, 2024</td>
              <PriceElement
                val={250}
                fee={16.52}
                showFee={showFee}
              ></PriceElement>
              <td>n/a</td>
            </tr>
            <tr>
              <td>
                Advisor Full{' '}
                <TextBadge className='border-text-color text-gray-700 dark:text-gray-400'>
                  On Site
                </TextBadge>
              </td>
              <td>(On Site)</td>
              <PriceElement
                val={300}
                fee={19.56}
                showFee={showFee}
              ></PriceElement>
              <td>n/a</td>
            </tr>
          </tbody>
        </table>
      </div>
      <table className='text-center table-mb'>
        <thead className='bg-green-400/30'>
          <tr>
            <th>Optional Ticket Add-ons</th>
            <th>Purchase Deadline</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gala Ticket - Collegiate</td>
            <td>September 30, 2024</td>
            <PriceElement val={50} fee={4.37} showFee={showFee}></PriceElement>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const ProfessionalTable = () => {
  const [showFee, setShowFee] = useState(false);

  return (
    <div>
      <TicketFeeElement
        showFee={showFee}
        setShowFee={setShowFee}
      ></TicketFeeElement>
      <div className='overflow-x-auto'>
        <table className='text-center table-mb md:w-[700px]'>
          <thead>
            <tr className='bg-lime-400/30'>
              <th>Ticket Type</th>
              <th>Purchase Deadline</th>
              <th>Member Price</th>
              <th>Non-Member Price</th>
            </tr>
          </thead>
          <tbody className='[&>*:nth-child(2n)]:bg-lime-400/15'>
            <tr>
              <td>
                Professional Full{' '}
                <TextBadge className='border-nav-green text-nav-green'>
                  Early Bird
                </TextBadge>
              </td>
              <td>June 30, 2024</td>
              <PriceElement
                val={375}
                fee={24.11}
                showFee={showFee}
              ></PriceElement>
              <PriceElement
                val={475}
                fee={30.19}
                showFee={showFee}
              ></PriceElement>
            </tr>
            <tr>
              <td>
                Professional Full{' '}
                <TextBadge className='border-text-color'>Regular</TextBadge>
              </td>
              <td>September 30, 2024</td>
              <PriceElement
                val={425}
                fee={27.15}
                showFee={showFee}
              ></PriceElement>
              <PriceElement
                val={525}
                fee={33.23}
                showFee={showFee}
              ></PriceElement>
            </tr>
            <tr>
              <td>
                Professional Full{' '}
                <TextBadge className='border-text-color text-gray-700 dark:text-gray-400'>
                  On Site
                </TextBadge>
              </td>
              <td>(On Site)</td>
              <PriceElement
                val={575}
                fee={36.27}
                showFee={showFee}
              ></PriceElement>
              <PriceElement
                val={575}
                fee={36.27}
                showFee={showFee}
              ></PriceElement>
            </tr>
          </tbody>
        </table>
      </div>
      <table className='text-center table-mb'>
        <thead className='bg-lime-400/30'>
          <tr>
            <th>Optional Ticket Add-ons</th>
            <th>Purchase Deadline</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gala Ticket</td>
            <td>September 30, 2024</td>
            <PriceElement val={75} fee={5.89} showFee={showFee}></PriceElement>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const ExpoOnlyTable = () => {
  const [showFee, setShowFee] = useState(false);

  return (
    <div>
      <table className='text-center table-mb md:min-w-[610px]'>
        <thead>
          <tr>
            <th className='p-0 pb-1 font-normal' colSpan={4}>
              <TicketFeeElement
                showFee={showFee}
                setShowFee={setShowFee}
              ></TicketFeeElement>
            </th>
          </tr>
          <tr className='bg-yellow-400/30'>
            <th>Ticket Type</th>
            <th>Purchase Deadline</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className='[&>*:nth-child(2n)]:bg-yellow-400/15'>
          <tr>
            <td>
              Expo (Attendee/Jobseeker){' '}
              <TextBadge className='border-text-color'>Regular</TextBadge>
            </td>
            <td>September 30, 2024</td>
            <PriceElement val={100} fee={7.4} showFee={showFee}></PriceElement>
          </tr>
          <tr>
            <td>
              Expo (Attendee/Jobseeker){' '}
              <TextBadge className='border-text-color text-gray-700 dark:text-gray-400'>
                On Site
              </TextBadge>
            </td>
            <td>On Site</td>
            <PriceElement val={125} fee={8.92} showFee={showFee}></PriceElement>
          </tr>
        </tbody>
      </table>
      <table className='text-center table-mb'>
        <thead className='bg-yellow-400/30'>
          <tr>
            <th>Optional Ticket Add-ons</th>
            <th>Purchase Deadline</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gala Ticket</td>
            <td>September 30, 2024</td>
            <PriceElement val={75} fee={5.89} showFee={showFee}></PriceElement>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const GeneralTable = ({ type }: { type: String }) => {
  switch (type) {
    case 'collegiate':
      return <CollegiateTable></CollegiateTable>;
    case 'professional':
      return <ProfessionalTable></ProfessionalTable>;
    case 'expo':
      return <ExpoOnlyTable></ExpoOnlyTable>;
    default:
      return <div>Table {type} not valid.</div>;
  }
};

export default GeneralTable;

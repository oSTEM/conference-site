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

export const CollegiateTable = ({ includeFees }: { includeFees?: boolean }) => {
  const [showFee, setShowFee] = useState(false);

  return (
    <table className='text-center table-mb'>
      <thead>
        <tr>
          <th className='p-0 pb-1 font-normal' colSpan={4}>
            <span className='flex w-full text-left'>
              <span className='grow'>
                Tickets are{' '}
                <span
                  className='text-nav-green cursor-help'
                  title='Approx. 6.08% + $1.32/ticket'
                >
                  subject to a fee
                </span>{' '}
                {showFee
                  ? 'included in the prices shown.'
                  : 'not currently shown below.'}
              </span>
              <span>
                Show Prices w/ Fees{' '}
                <ToggleSwitch enabled={showFee} setEnabled={setShowFee} />
              </span>
            </span>
          </th>
        </tr>
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
            Collegiate Full Conference{' '}
            <TextBadge className='border-nav-green text-nav-green'>
              Early Bird
            </TextBadge>
          </td>
          <td>June 30, 2024</td>
          <PriceElement val={150} fee={10.44} showFee={showFee}></PriceElement>
          <PriceElement val={225} fee={15} showFee={showFee}></PriceElement>
        </tr>
        <tr>
          <td>
            Collegiate Full Conference{' '}
            <TextBadge className='border-text-color'>Regular</TextBadge>
          </td>
          <td>September 30, 2024</td>
          <PriceElement val={175} fee={11.96} showFee={showFee}></PriceElement>
          <PriceElement val={250} fee={16.52} showFee={showFee}></PriceElement>
        </tr>
        <tr>
          <td>
            Advisor Full Conference{' '}
            <TextBadge className='border-nav-green text-nav-green'>
              Early Bird
            </TextBadge>
          </td>
          <td>June 30, 2024</td>
          <PriceElement val={225} fee={15.0} showFee={showFee}></PriceElement>
          <td>n/a</td>
        </tr>
        <tr>
          <td>
            Advisor Full Conference{' '}
            <TextBadge className='border-text-color'>Regular</TextBadge>
          </td>
          <td>September 30, 2024</td>
          <PriceElement val={250} fee={16.52} showFee={showFee}></PriceElement>
          <td>n/a</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ProfessionalTable = ({
  includeFees,
}: {
  includeFees?: boolean;
}) => {
  const [showFee, setShowFee] = useState(false);

  return (
    <table className='text-center table-mb'>
      <thead>
        <tr>
          <th className='p-0 pb-1 font-normal' colSpan={4}>
            <span className='flex w-full text-left'>
              <span className='grow'>
                Tickets are{' '}
                <span
                  className='text-nav-green cursor-help'
                  title='Approx. 6.08% + $1.32/ticket'
                >
                  subject to a fee
                </span>{' '}
                {showFee
                  ? 'included in the prices shown.'
                  : 'not currently shown below.'}
              </span>
              <span>
                Show Prices w/ Fees{' '}
                <ToggleSwitch enabled={showFee} setEnabled={setShowFee} />
              </span>
            </span>
          </th>
        </tr>
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
            Professional Full Conference{' '}
            <TextBadge className='border-nav-green text-nav-green'>
              Early Bird
            </TextBadge>
          </td>
          <td>June 30, 2024</td>
          <PriceElement val={375} fee={24.11} showFee={showFee}></PriceElement>
          <PriceElement val={425} fee={27.15} showFee={showFee}></PriceElement>
        </tr>
        <tr>
          <td>
            Professional Full Conference{' '}
            <TextBadge className='border-text-color'>Regular</TextBadge>
          </td>
          <td>September 30, 2024</td>
          <PriceElement val={475} fee={30.19} showFee={showFee}></PriceElement>
          <PriceElement val={525} fee={33.23} showFee={showFee}></PriceElement>
        </tr>
      </tbody>
    </table>
  );
};

const GeneralTable = ({ type }: { type: String }) => {
  switch (type) {
    case 'collegiate':
      return <CollegiateTable></CollegiateTable>;
    case 'professional':
      return <ProfessionalTable></ProfessionalTable>;
    default:
      return <div>Table {type} not valid.</div>;
  }
};

export default GeneralTable;

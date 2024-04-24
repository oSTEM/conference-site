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

export const CollegiateTable = ({ includeFees }: { includeFees?: boolean }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <table className='text-center table-mb'>
      <thead>
        <tr>
          <th className='p-0 pb-1 font-normal' colSpan={4}>
            <span className='flex w-full text-left'>
              <span className='grow'>
                Tickets are{' '}
                <span
                  className='text-nav-green'
                  title='Approx. 6.08% + $1.32/ticket'
                >
                  subject to a fee
                </span>{' '}
                not currently shown below.
              </span>
              <span>
                Show Prices w/ Fees{' '}
                <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
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
          <td>$150</td>
          <td>$225</td>
        </tr>
        <tr>
          <td>
            Collegiate Full Conference{' '}
            <TextBadge className='border-text-color'>Regular</TextBadge>
          </td>
          <td>September 30, 2024</td>
          <td>$175</td>
          <td>$250</td>
        </tr>
        <tr>
          <td>
            Advisor Full Conference{' '}
            <TextBadge className='border-nav-green text-nav-green'>
              Early Bird
            </TextBadge>
          </td>
          <td>June 30, 2024</td>
          <td>$225</td>
          <td>n/a</td>
        </tr>
        <tr>
          <td>
            Advisor Full Conference{' '}
            <TextBadge className='border-text-color'>Regular</TextBadge>
          </td>
          <td>September 30, 2024</td>
          <td>$250</td>
          <td>n/a</td>
        </tr>
      </tbody>
    </table>
  );
};

const GeneralTable = ({ type }: { type: String }) => {
  return <CollegiateTable></CollegiateTable>;
};

export default GeneralTable;

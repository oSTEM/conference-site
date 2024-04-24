import { TextBadge } from '@/components/badge/TextBadge';

const Price = ({ val }: { val: number }) => {
  return <td>{val}</td>;
};

export const CollegiateTable = ({ includeFees }: { includeFees?: boolean }) => {
  return (
    <div>
      <table className='table-fixed text-center table-mb'>
        <thead>
          <tr className='bg-green-300/25'>
            <th>Ticket Type</th>
            <th>Purchase Deadline</th>
            <th>Member Price</th>
            <th>Non-Member Price</th>
          </tr>
        </thead>
        <tbody>
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
          <tr className='bg-green-300/10'>
            <td>
              Collegiate Full Conference <TextBadge>Regular</TextBadge>
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
          <tr className='bg-green-300/10'>
            <td>
              Advisor Full Conference <TextBadge>Regular</TextBadge>
            </td>
            <td>September 30, 2024</td>
            <td>$250</td>
            <td>n/a</td>
          </tr>
        </tbody>
      </table>
      <p className='mt-0'>
        *Prices displayed do not include registration fees.{' '}
        <span>Show Prices w/ Fees</span>
      </p>
    </div>
  );
};

const GeneralTable = ({ type }: { type: String }) => {
  return <CollegiateTable></CollegiateTable>;
};

export default GeneralTable;

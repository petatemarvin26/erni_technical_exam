import {useSelector} from 'react-redux';

import {ParkingSide} from 'components';
import {Props} from 'ducks';
import {ParkingSide as ParkingSideType} from 'ducks/parking_side/types';

const ParkingSideHoc: React.FC<{side_id: string}> = ({side_id}) => {
  const parking_side = useSelector<Props>((state) =>
    state.parkingSide?.data.find(({id}) => id === side_id)
  ) as ParkingSideType;

  return (
    <ParkingSide
      side_id={side_id}
      parking_spaces={parking_side.parking_spaces}
    />
  );
};

export default ParkingSideHoc;

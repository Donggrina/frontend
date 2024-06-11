import Image from 'next/image';
import styles from './pet-radio.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '@/pages/calendar/create';

interface PetRadio {
  register: UseFormRegister<IFormInput>;
  petName: string;
}

export default function PetRadio({ register, petName }: PetRadio) {
  return (
    <label className={styles.petLabel}>
      <input
        {...register('pet', { validate: (selected) => !!selected || '*반려동물을 선택해주세요.' })}
        value={petName}
        className={styles.petInput}
        type="radio"
      />
      <Image className={styles.petOn} src={`/images/calendar/${petName}-on.svg`} alt="반려동물 선택 상태" fill />
      <Image className={styles.petOff} src={`/images/calendar/${petName}-off.svg`} alt="반려동물 선택 해제 상태" fill />
    </label>
  );
}
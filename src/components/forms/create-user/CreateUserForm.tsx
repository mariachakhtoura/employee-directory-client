import { useForm, SubmitHandler } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { GENDERS, ICreateUserInputs } from './model';
import DialogFieldWrapper from '../DialogFieldWrapper';

export interface ICreateUserFormProps {
  values?: Partial<ICreateUserInputs>;
}

const CreateUserForm = ({ values }: ICreateUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUserInputs>({
    defaultValues: values,
  });
  const onSubmit: SubmitHandler<ICreateUserInputs> = (data) =>
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-column align-items-center'
    >
      <div className='flex gap-4 w-full'>
        <DialogFieldWrapper
          label={{
            fieldName: 'firstName',
            text: 'First Name',
          }}
          error={{
            existsError: !!errors.firstName,
            errorText: 'Required',
          }}
        >
          <InputText
            className='mb-1 w-full'
            {...register('firstName', { required: true })}
          />
        </DialogFieldWrapper>
        <DialogFieldWrapper
          label={{
            fieldName: 'lastName',
            text: 'Last Name',
          }}
          error={{
            existsError: !!errors.lastName,
            errorText: 'Required',
          }}
        >
          <InputText
            className='mb-1 w-full'
            {...register('lastName', { required: true })}
          />
        </DialogFieldWrapper>
      </div>

      <div className='w-full'>
        <DialogFieldWrapper
          label={{
            fieldName: 'email',
            text: 'Email',
          }}
          error={{
            existsError: !!errors.email,
            errorText: 'Required',
          }}
        >
          <InputText
            className='w-full mb-1'
            type='email'
            {...register('email', { required: true })}
          />
        </DialogFieldWrapper>
      </div>

      <div className='flex gap-4  w-full'>
        <DialogFieldWrapper
          label={{
            fieldName: 'dob',
            text: 'Date of birth',
          }}
          error={{
            existsError: !!errors.dob,
            errorText: 'Required',
          }}
        >
          <Calendar className='mb-5' showIcon {...register('dob')} />
        </DialogFieldWrapper>
        <DialogFieldWrapper
          label={{
            fieldName: 'gender',
            text: 'Gender',
          }}
          error={{
            existsError: !!errors.gender,
            errorText: 'Required',
          }}
        >
          <Dropdown
            {...register('gender')}
            options={GENDERS}
            optionLabel='gender'
            placeholder='Select your gender'
            className='mb-5 w-full'
          />
        </DialogFieldWrapper>
      </div>

      <Button
        label='Submit'
        type='submit'
        text
        className='max-w-12rem w-full mt-5 p-3 hover:bg-primary-600 bg-primary'
      />
    </form>
  );
};

export default CreateUserForm;

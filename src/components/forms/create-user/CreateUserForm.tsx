import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { GENDERS, ICreateUserInputs } from './model';
import DialogFieldWrapper from '../DialogFieldWrapper';

export interface ICreateUserFormProps {
  values?: Partial<ICreateUserInputs>;
  onSubmit: (data: ICreateUserInputs) => void;
}

const CreateUserForm = ({ values, onSubmit }: ICreateUserFormProps) => {
  const { t } = useTranslation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICreateUserInputs>({
    defaultValues: values,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex align-items-center flex-column'
    >
      <div className='formfield'>
        <input hidden defaultValue={values?.id} />
        <DialogFieldWrapper
          label={{
            fieldName: 'firstName',
            text: t('forms.user.fields.firstname.label'),
          }}
          error={{
            existsError: !!errors.firstName,
            errorText: t('forms.errors.required'),
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
            text: t('forms.user.fields.lastname.label'),
          }}
          error={{
            existsError: !!errors.lastName,
            errorText: t('forms.errors.required'),
          }}
        >
          <InputText
            className='mb-1 w-full'
            {...register('lastName', { required: true })}
          />
        </DialogFieldWrapper>
      </div>

      <div className='formfield'>
        <DialogFieldWrapper
          label={{
            fieldName: 'email',
            text: t('forms.user.fields.email.label'),
          }}
          error={{
            existsError: !!errors.email,
            errorText: t('forms.errors.required'),
          }}
        >
          <InputText
            className='w-full mb-1'
            type='email'
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
        </DialogFieldWrapper>
      </div>

      <div className='formfield'>
        <DialogFieldWrapper
          label={{
            fieldName: 'dob',
            text: t('forms.user.fields.dob.label'),
          }}
        >
          <Controller
            name='dob'
            control={control}
            render={({ field }) => (
              <Calendar {...field} showIcon dateFormat='dd/mm/yy' />
            )}
          />
        </DialogFieldWrapper>
        <DialogFieldWrapper
          label={{
            fieldName: 'gender',
            text: t('forms.user.fields.gender.label'),
          }}
        >
          <Controller
            name='gender'
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={GENDERS}
                optionLabel='gender'
                className='w-full'
              />
            )}
          />
        </DialogFieldWrapper>
        <DialogFieldWrapper
          label={{
            fieldName: 'country',
            text: t('forms.user.fields.country.label'),
          }}
        >
          <InputText className='mb-1 w-full' {...register('country')} />
        </DialogFieldWrapper>
      </div>

      <Button
        label={t('forms.submit')}
        type='submit'
        text
        loading={isSubmitting}
        className='max-w-12rem w-full mt-5 p-3 hover:bg-primary-600 bg-primary'
      />
    </form>
  );
};

export default CreateUserForm;

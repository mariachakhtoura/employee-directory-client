import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { GENDERS, ICreateUserInputs } from './model';
import DialogFieldWrapper from '../DialogFieldWrapper';
import { Forms } from '../../../common/models/form';
import { useTranslation } from 'react-i18next';

export interface ICreateUserFormProps {
  values?: Partial<ICreateUserInputs>;
}

const CreateUserForm = ({ values }: ICreateUserFormProps) => {
  const { t } = useTranslation();
  const {
    control,
    register,
    formState: { errors },
  } = useForm<ICreateUserInputs>({
    defaultValues: values,
  });

  return (
    <>
      <div className='flex gap-4 w-full'>
        <input hidden defaultValue={values?.id} />
        <DialogFieldWrapper
          label={{
            fieldName: 'firstName',
            text: t('forms.user.fields.firstname.label'),
          }}
          error={{
            existsError: !!errors.firstName,
            errorText: t('forms.error.required'),
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
            errorText: t('forms.error.required'),
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
            text: t('forms.user.fields.email.label'),
          }}
          error={{
            existsError: !!errors.email,
            errorText: t('forms.error.required'),
          }}
        >
          <InputText
            className='w-full mb-1'
            type='email'
            {...register('email', { required: true })}
          />
        </DialogFieldWrapper>
      </div>

      <div className='flex gap-4 w-full'>
        <DialogFieldWrapper
          label={{
            fieldName: 'dob',
            text: t('forms.user.fields.dob.label'),
          }}
          error={{
            existsError: !!errors.dob,
            errorText: '',
          }}
        >
          <Controller
            name='dob'
            control={control}
            render={({ field }) => (
              <Calendar
                {...field}
                className='mb-5'
                showIcon
                dateFormat='dd/mm/yy'
              />
            )}
          />
        </DialogFieldWrapper>
        <DialogFieldWrapper
          label={{
            fieldName: 'gender',
            text: t('forms.user.fields.gender.label'),
          }}
          error={{
            existsError: !!errors.gender,
            errorText: '',
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
                className='mb-5 w-full'
              />
            )}
          />
        </DialogFieldWrapper>
        <DialogFieldWrapper
          label={{
            fieldName: 'country',
            text: t('forms.user.fields.country.label'),
          }}
          error={{
            existsError: !!errors.country,
            errorText: '',
          }}
        >
          <InputText className='mb-1 w-full' {...register('country')} />
        </DialogFieldWrapper>
      </div>

      <Button
        label={t('forms.submit')}
        type='submit'
        text
        name='intent'
        value={Forms.createUser}
        className='max-w-12rem w-full mt-5 p-3 hover:bg-primary-600 bg-primary'
      />
    </>
  );
};

export default CreateUserForm;

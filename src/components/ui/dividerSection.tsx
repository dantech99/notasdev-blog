
// divisor de secciones
export default function DividerSection({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  return (
    <div className="md:text-left text-center" role="separator">
      <fieldset className="border-t-2 border-[#27263b]">
        <legend
          className="transition hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100 flex gap-2 justify-center items-center p-2 bg-[#0b1528] border border-[#27263b] rounded-md m-0 text-white  text-3xl font-bold mb-6 md:text-4xl"
          id={id}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C10.1113 21.8742 8 21.064 8 18.4442C8 16.3949 9.49507 15.0085 10.631 14.3346C10.9365 14.1533 11.2941 14.3887 11.2941 14.7439V15.3331C11.2941 15.784 11.4685 16.4889 11.8836 16.9714C12.3534 17.5174 13.0429 16.9454 13.0985 16.2273C13.1161 16.0008 13.3439 15.8564 13.5401 15.9711C14.1814 16.3459 15 17.1465 15 18.4442C15 20.4922 13.871 21.4343 12.8324 21.8013Z"
              fill="#FADB6F"
            />
          </svg>{' '}
          {title}
        </legend>
      </fieldset>
    </div>
  );
}

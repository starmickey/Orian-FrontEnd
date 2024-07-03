import Image from "next/image";

export default function Logo(
  { showLabel, className } :
  {
    showLabel : boolean,
    className : string
  }) {
  return (
    <Image
      src={
        showLabel ?
          "/Logo.png" :
          "/Logo_no_label.png"
      }
      width={500}
      height={500}
      alt="orian logo"
      className={className}
    />
  )
}
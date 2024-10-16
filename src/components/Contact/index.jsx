import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

import Button from "../Button";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <div className={css.row}>
          <IoPersonSharp className={css.icon} size={18} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.row}>
          <FaPhone className={css.icon} size={18} />
          <p className={css.text}>{number}</p>
        </div>
      </div>

      <Button
        type="button"
        title="Delete"
        onClick={() => onDelete(id)}
        icon={<RiDeleteBin6Fill />}
      />
    </div>
  );
};

export default Contact;

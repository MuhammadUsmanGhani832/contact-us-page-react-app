import styles from './contact.module.css';
import { MdOutlineChat } from "react-icons/md";
import { IoIosCall } from "react-icons/io";



const Contact = () => {
    
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.Form}>
          <div className={styles.supportChat}>
            <div>
              <button>
                <MdOutlineChat
                /> VIA SUPPORT CHAT
              </button>
              <button>
                <IoIosCall /> VIA CALL
              </button>
            </div>
            <button>
              <MdOutlineChat /> VIA EMAIL FORM
            </button>
          </div>
          <form action="#">
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">TEXT</label>
              <textarea type="text" name="email" />
            </div>
            <button>SUBMIT</button>
          </form>
        </div>
        <div className={styles.contactImage}>
            <img src="/images/Service 24_7-pana 1.svg" alt="contact " />
        </div>
      </div>
    </div>
  );
}

export default Contact
const { createTennatProfile } = require("../services/TenantProfile");
const { createUserProfile } = require("../services/UserProfile");

const processMessage = async (kafkaMessage) => {
  //Start working here
  console.log(
    "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
    kafkaMessage
  );

  if (kafkaMessage.event_name == "user_created") {
    try {
      let {
        first_name,
        last_name,
        department,
        designation,
        tenant_id,
        image_url,
        city,
        country,
        bio,
        social_links,
        employee_id,
      } = { ...kafkaMessage.properties };
      await createUserProfile({
        first_name,
        last_name,
        department,
        designation,
        tenant_id,
        image_url,
        city,
        country,
        bio,
        social_links,
        employee_id,
      });
    } catch (error) {
      console.log(error);
    }
  } else if (kafkaMessage.event_name == "tenant_created") {
    try {
      let { name, address, city, state, country, zip_code, phone, web_url } = {
        ...kafkaMessage.properties,
      };
      await createTennatProfile({
        name,
        address,
        city,
        state,
        country,
        zip_code,
        phone,
        web_url,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { processMessage };

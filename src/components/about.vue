<template>


<b-container>
 
   <h3>Welcome to my Techladies application page!</h3>


    <img :src="profile" alt="ProfilePhoto" class="textwrap" />
    <br>
    <h4>"Hand itchy"?" My start at development work</h4>
    <p>I am a market researcher, and in market research there is a lot of emphasis on replicating realistic online e-commerce environments on survey platforms to ensure good data quality. As my company's development team is based in Europe, the time difference meant that I was often left twiddling my thumbs when clients requested for minor changes to the survey interfaces. Eventually, I decided to take things in my own hands and started learning a little bit of CSS, which was the start of something new for me :)</p>

    <h4>From end-user to scrappy code</h4>
    <p>I started to put together guides that made it easier for noobs like me to make quick-fixes to the survey platform. It's really amazing how far a simple "padding: 0 auto"; can lead you! For me personally, the sense of instant gratification that I got from seeing the small changes that I implemented immediately surface on screen scratched a certain itch that the slow-crunching of data that we often do in research couldn't quite. </p>

    <h4>The next part of my journey</h4>
    <p>While I started to take up online courses here and there, I realised that my learning was quite "patchy". I was essentially adopting a very 'issue-centric' form of learning. For example, if I wanted to make a question appear only after a response had been selected in a previous question, I would then spend the next two or three hours reading about jquery. While I would be able to (eventually) cobble something together, I wasn't sure if my solution would scale, and my learnings would fade with time because I did not have the strong foundational knowledge that many CS graduates might have. I realised that I needed to structure my learning properly, and I think that this techladies bootcamp would be the perfect opportunity for me to not only learn how to build tools that can scale, but to find mentors and peers and we can support each other as we embark on this new journey! </p>
    <h4>p.s. commenting code</h4>
    <p>One quirk of mine is that I love to comment on my code. As a 'scrappy coder' trying to find my way around my development team's code, I found that I learnt <i>so much</i> from the odd comment or two that the developers had left in their code. It could be as simple a phrase as <i>"performs this function"</i> and it would be like a lighthouse in a sea of code. So now, I try to comment on what I'm trying to achieve with the code that I'm writing as much as possible. </p>


 
  
</b-container>


</template>

<script>

import ProfilePhoto from 'C:/Users/Debby/techladies/src/assets/user-photo.jpg'; 

export default {

  data () {
    return {
      profile: ProfilePhoto,
    }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
    margin-left: 0px;
    margin-top: 10px;
}
img {
  max-width:20%;
}
.textwrap {
  float: left;
}

p {
  font-size: 13px;
}

</style>

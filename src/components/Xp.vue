<template>
  <div id="two" class="rubDiv">
    <h2>Expérience</h2>
    <br>
    <table>
      <tr v-for="item in xpItems">
        <td class="date">{{ item.date }}</td>
        <td>{{ item.title }}</br>
          <em>{{ item.company }}</em>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Xp',
  data () {
    return {
      xpItems: [
      {
        date:"Juillet 2014",
        title: "Auxiliaire d'été",
        company: "Société Générale, agence de Thiers"
       },
       {
        date:"Années scolaires 2012/2014",
        title: "Stagiaire (pendant 17 semaines non consécutives)",
        company: "Caisse d'Épargne Auvergne-Limousin, agence de Thiers/Société Générale, agences de Beaumont et Thiers"
        },
        {
        date:"Été 2012",
         title: "Manutentionnaire (par intérim)",
         company: "Brüggen France (céréales)"
        },
       {
        date:"Été 2009/été 2010",
        title: "Agent d'entretien",
        company: "La Rayonnante (services d’entretien)"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

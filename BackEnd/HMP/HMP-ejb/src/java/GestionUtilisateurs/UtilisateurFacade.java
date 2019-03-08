/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package GestionUtilisateurs;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author 5151882
 */
@Stateless
public class UtilisateurFacade extends AbstractFacade<Utilisateur> implements UtilisateurFacadeLocal {

    @PersistenceContext(unitName = "HMP-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UtilisateurFacade() {
        super(Utilisateur.class);
    }

    @Override
    public Utilisateur authentification(String email, String motdepasse) {
        Utilisateur u = null;
        Query requete = getEntityManager().createQuery("select u from Utilisateur as u where u.mail=:mail and u.motdepasse=:mdp");
        requete.setParameter("mail",email);
        requete.setParameter("mdp", motdepasse);
        if (!requete.getResultList().isEmpty()) {
            u = (Utilisateur) requete.getSingleResult();
        }
        return u;
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package GestionUtilisateurs;

import javax.ejb.Local;

/**
 *
 * @author 5151882
 */
@Local
public interface GestionUtilisateurLocal {

    Utilisateur authentification(String mail, String mdp);
    
}

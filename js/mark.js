class question {
    constructor(type, symptoms){
        this.type = type;
        this.symptoms = symptoms;
    };
        symptoms(){
            if(this.symptoms == "weaknes + lack/loss of vigour"){
                return Anemia;
            }else if (this.symptoms == "swollen abdomen"){
                return Bloat;
            }else if (this.symptoms == "laboured breathing + profuse salivation "){
                return Colic;
            }else if (this.symptoms == "groaning + lack of appetite +stiffness"){
                return Enterotoxemia;
            }else if (this.symptoms == "pain +sweating + constipation + kicking + groaning"){
                return Founder;
            }else if (this.symptoms == "constipation + diarehea"){
                return Cholera;
            }else if (this.symptoms == "pain + fever"){
                return Equine-Encephalomyelitis;
            }else if (this.symptoms == "lack/loss of appetite + fever "){
                return Hemorrhagic-Septicemia;
            }else if (this.symptoms == "appetite + fever +breathing diificulty + wobbly gait"){
                return Newcastle;
            }else if (this.symptoms == "fever + impaired vission + irregular gait + muscle spasms + walking aimlessly"){
                return Warts;
            }else if (this.symptoms == "fever + difficulty in breathing + discharge from the eyes & nose"){
                return Pneumonia;
            }else if (this.symptoms == "Chicks make circular movements + walk backwards,+ fall, + twist their necks so that their heads are lying on their backs,+ cough,+ sneeze, + develop high fever + diarrhea"){
                return Tetanus;
            }else if (this.symptoms == "growths on the skin."){
                return Atrophic-Rhinitis;
            }else if (this.symptoms == "A general dullness, + failing appetite,+ fever + difficulty breathing."){
                return Anthrax;
            }else if (this.symptoms == "Difficulty swallowing, + stiff muscles, + muscle spasms."){
            return Blackleg;
            }else if (this.symptoms == "Crooked & wrinkled nose. Sneezing,+ nose bleeds, + tear-stained face occur."){
                return Brucellosis;
            }else if (this.symptoms == "Fever,+ swelling in the lower body region + a bloody discharge + staggering + trembling + difficult breathing,"){
                return Distemper;
            }else if (this.symptoms == "Lameness + followed by depression + fever. The muscles in the hip + shoulder + chest + back + neck swell."){
                return Erysipelas;
            }else if (this.symptoms == "The abortion of the immature fetus ."){
                return Leptospirosis;
            }else if (this.symptoms == " diamond skin form. + constipation + diarrhea + reddish patches on the skin.+ localized in an organ such as heart, bladder + orjoints + Sloughing off of the skin "){
                return Tuberculosis;
            }else if (this.symptoms == "blood-tinged milk & urine"){
                return 200;
            }else if (this.symptoms == "The abortion of the immature fetus ."){
                return Pullorum;
            }else if (this.symptoms == " appear unthrifty & have a cough."){
                return Foot-Rot;
            }else if (this.symptoms == "infected chicks huddle together with their eyes closed + wings drooped + feathers ruffled + have foamy droppings."){
                return Calf-Diphtheria;
            }else if (this.symptoms == "Skin near the hoof-line is red,swollen, & often has smalllesions."){
                return Coccidiosis;
            }else if (this.symptoms == "Difficulty breathing + eating, and drinking + Patches of yellowish,+ dead tissue appear on the edges of thetongue, gums, & throat. Often, a nasal discharge occurs."){
                return 200;
            }else{return please-put-all-symptoms;
                }
        }
}

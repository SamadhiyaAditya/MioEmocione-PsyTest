const emotionalIntelligenceQuestions = [
    {
      id: "ei1",
      text: "I understand my emotions well",
      options: [
        { id: "ei1-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei1-2", text: "Disagree", weight: 2 },
        { id: "ei1-3", text: "Neutral", weight: 3 },
        { id: "ei1-4", text: "Agree", weight: 4 },
        { id: "ei1-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei2",
      text: "I can manage my emotions in stressful situations",
      options: [
        { id: "ei2-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei2-2", text: "Disagree", weight: 2 },
        { id: "ei2-3", text: "Neutral", weight: 3 },
        { id: "ei2-4", text: "Agree", weight: 4 },
        { id: "ei2-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei3",
      text: "I am aware of how my emotions affect others",
      options: [
        { id: "ei3-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei3-2", text: "Disagree", weight: 2 },
        { id: "ei3-3", text: "Neutral", weight: 3 },
        { id: "ei3-4", text: "Agree", weight: 4 },
        { id: "ei3-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei4",
      text: "I can recognize emotions in other people",
      options: [
        { id: "ei4-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei4-2", text: "Disagree", weight: 2 },
        { id: "ei4-3", text: "Neutral", weight: 3 },
        { id: "ei4-4", text: "Agree", weight: 4 },
        { id: "ei4-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei5",
      text: "I handle criticism well",
      options: [
        { id: "ei5-1", text: "Strongly Disagree", weight: 5 },
        { id: "ei5-2", text: "Disagree", weight: 4 },
        { id: "ei5-3", text: "Neutral", weight: 3 },
        { id: "ei5-4", text: "Agree", weight: 2 },
        { id: "ei5-5", text: "Strongly Agree", weight: 1 },
      ],
    },
    {
      id: "ei6",
      text: "I am motivated by internal goals",
      options: [
        { id: "ei6-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei6-2", text: "Disagree", weight: 2 },
        { id: "ei6-3", text: "Neutral", weight: 3 },
        { id: "ei6-4", text: "Agree", weight: 4 },
        { id: "ei6-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei7",
      text: "I maintain positive relationships with others",
      options: [
        { id: "ei7-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei7-2", text: "Disagree", weight: 2 },
        { id: "ei7-3", text: "Neutral", weight: 3 },
        { id: "ei7-4", text: "Agree", weight: 4 },
        { id: "ei7-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei8",
      text: "I can adapt to changing circumstances",
      options: [
        { id: "ei8-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei8-2", text: "Disagree", weight: 2 },
        { id: "ei8-3", text: "Neutral", weight: 3 },
        { id: "ei8-4", text: "Agree", weight: 4 },
        { id: "ei8-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei9",
      text: "I take responsibility for my mistakes",
      options: [
        { id: "ei9-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei9-2", text: "Disagree", weight: 2 },
        { id: "ei9-3", text: "Neutral", weight: 3 },
        { id: "ei9-4", text: "Agree", weight: 4 },
        { id: "ei9-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei10",
      text: "I help others manage their emotions",
      options: [
        { id: "ei10-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei10-2", text: "Disagree", weight: 2 },
        { id: "ei10-3", text: "Neutral", weight: 3 },
        { id: "ei10-4", text: "Agree", weight: 4 },
        { id: "ei10-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei11",
      text: "I reflect on my emotional experiences",
      options: [
        { id: "ei11-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei11-2", text: "Disagree", weight: 2 },
        { id: "ei11-3", text: "Neutral", weight: 3 },
        { id: "ei11-4", text: "Agree", weight: 4 },
        { id: "ei11-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei12",
      text: "I can delay gratification for long-term goals",
      options: [
        { id: "ei12-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei12-2", text: "Disagree", weight: 2 },
        { id: "ei12-3", text: "Neutral", weight: 3 },
        { id: "ei12-4", text: "Agree", weight: 4 },
        { id: "ei12-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei13",
      text: "I express my feelings appropriately",
      options: [
        { id: "ei13-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei13-2", text: "Disagree", weight: 2 },
        { id: "ei13-3", text: "Neutral", weight: 3 },
        { id: "ei13-4", text: "Agree", weight: 4 },
        { id: "ei13-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei14",
      text: "I seek feedback to improve myself",
      options: [
        { id: "ei14-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei14-2", text: "Disagree", weight: 2 },
        { id: "ei14-3", text: "Neutral", weight: 3 },
        { id: "ei14-4", text: "Agree", weight: 4 },
        { id: "ei14-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei15",
      text: "I maintain emotional balance in daily life",
      options: [
        { id: "ei15-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei15-2", text: "Disagree", weight: 2 },
        { id: "ei15-3", text: "Neutral", weight: 3 },
        { id: "ei15-4", text: "Agree", weight: 4 },
        { id: "ei15-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei16",
      text: "I can resolve conflicts constructively",
      options: [
        { id: "ei16-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei16-2", text: "Disagree", weight: 2 },
        { id: "ei16-3", text: "Neutral", weight: 3 },
        { id: "ei16-4", text: "Agree", weight: 4 },
        { id: "ei16-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei17",
      text: "I am empathetic towards others",
      options: [
        { id: "ei17-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei17-2", text: "Disagree", weight: 2 },
        { id: "ei17-3", text: "Neutral", weight: 3 },
        { id: "ei17-4", text: "Agree", weight: 4 },
        { id: "ei17-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei18",
      text: "I learn from past experiences",
      options: [
        { id: "ei18-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei18-2", text: "Disagree", weight: 2 },
        { id: "ei18-3", text: "Neutral", weight: 3 },
        { id: "ei18-4", text: "Agree", weight: 4 },
        { id: "ei18-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei19",
      text: "I motivate others around me",
      options: [
        { id: "ei19-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei19-2", text: "Disagree", weight: 2 },
        { id: "ei19-3", text: "Neutral", weight: 3 },
        { id: "ei19-4", text: "Agree", weight: 4 },
        { id: "ei19-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei20",
      text: "I accept others perspectives different from mine",
      options: [
        { id: "ei20-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei20-2", text: "Disagree", weight: 2 },
        { id: "ei20-3", text: "Neutral", weight: 3 },
        { id: "ei20-4", text: "Agree", weight: 4 },
        { id: "ei20-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei21",
      text: "I am aware of my strengths and weaknesses",
      options: [
        { id: "ei21-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei21-2", text: "Disagree", weight: 2 },
        { id: "ei21-3", text: "Neutral", weight: 3 },
        { id: "ei21-4", text: "Agree", weight: 4 },
        { id: "ei21-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei22",
      text: "I maintain healthy boundaries with others",
      options: [
        { id: "ei22-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei22-2", text: "Disagree", weight: 2 },
        { id: "ei22-3", text: "Neutral", weight: 3 },
        { id: "ei22-4", text: "Agree", weight: 4 },
        { id: "ei22-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei23",
      text: "I handle failures constructively",
      options: [
        { id: "ei23-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei23-2", text: "Disagree", weight: 2 },
        { id: "ei23-3", text: "Neutral", weight: 3 },
        { id: "ei23-4", text: "Agree", weight: 4 },
        { id: "ei23-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei24",
      text: "I have a positive outlook on life",
      options: [
        { id: "ei24-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei24-2", text: "Disagree", weight: 2 },
        { id: "ei24-3", text: "Neutral", weight: 3 },
        { id: "ei24-4", text: "Agree", weight: 4 },
        { id: "ei24-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei25",
      text: "I collaborate well with others",
      options: [
        { id: "ei25-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei25-2", text: "Disagree", weight: 2 },
        { id: "ei25-3", text: "Neutral", weight: 3 },
        { id: "ei25-4", text: "Agree", weight: 4 },
        { id: "ei25-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei26",
      text: "I am patient with others",
      options: [
        { id: "ei26-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei26-2", text: "Disagree", weight: 2 },
        { id: "ei26-3", text: "Neutral", weight: 3 },
        { id: "ei26-4", text: "Agree", weight: 4 },
        { id: "ei26-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei27",
      text: "I celebrate others achievements",
      options: [
        { id: "ei27-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei27-2", text: "Disagree", weight: 2 },
        { id: "ei27-3", text: "Neutral", weight: 3 },
        { id: "ei27-4", text: "Agree", weight: 4 },
        { id: "ei27-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei28",
      text: "I am open to learning and growing",
      options: [
        { id: "ei28-1", text: "Strongly Disagree", weight: 5 },
        { id: "ei28-2", text: "Disagree", weight: 4 },
        { id: "ei28-3", text: "Neutral", weight: 3 },
        { id: "ei28-4", text: "Agree", weight: 2 },
        { id: "ei28-5", text: "Strongly Agree", weight: 1 },
      ],
    },
    {
      id: "ei29",
      text: "I maintain emotional stability under pressure",
      options: [
        { id: "ei29-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei29-2", text: "Disagree", weight: 2 },
        { id: "ei29-3", text: "Neutral", weight: 3 },
        { id: "ei29-4", text: "Agree", weight: 4 },
        { id: "ei29-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei30",
      text: "I set healthy goals for myself",
      options: [
        { id: "ei30-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei30-2", text: "Disagree", weight: 2 },
        { id: "ei30-3", text: "Neutral", weight: 3 },
        { id: "ei30-4", text: "Agree", weight: 4 },
        { id: "ei30-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei31",
      text: "I strive to develop my emotional skills",
      options: [
        { id: "ei31-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei31-2", text: "Disagree", weight: 2 },
        { id: "ei31-3", text: "Neutral", weight: 3 },
        { id: "ei31-4", text: "Agree", weight: 4 },
        { id: "ei31-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei32",
      text: "I am authentic in my interactions",
      options: [
        { id: "ei32-1", text: "Strongly Disagree", weight: 1 },
        { id: "ei32-2", text: "Disagree", weight: 2 },
        { id: "ei32-3", text: "Neutral", weight: 3 },
        { id: "ei32-4", text: "Agree", weight: 4 },
        { id: "ei32-5", text: "Strongly Agree", weight: 5 },
      ],
    },
    {
      id: "ei33",
      text: "I inspire confidence in others",
      options: [
        { id: "ei33-1", text: "Strongly Disagree", weight: 5 },
        { id: "ei33-2", text: "Disagree", weight: 4 },
        { id: "ei33-3", text: "Neutral", weight: 3 },
        { id: "ei33-4", text: "Agree", weight: 2 },
        { id: "ei33-5", text: "Strongly Agree", weight: 1 },
      ],
    },
  ]
  
  const emotionalMaturityQuestions = [
    {
      id: "em1",
      text: "I accept responsibility for my actions",
      options: [
        { id: "em1-1", text: "Always", weight: 4 },
        { id: "em1-2", text: "Sometimes", weight: 3 },
        { id: "em1-3", text: "Rarely", weight: 2 },
        { id: "em1-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em2",
      text: "I control my impulses and reactions",
      options: [
        { id: "em2-1", text: "Always", weight: 1 },
        { id: "em2-2", text: "Sometimes", weight: 2 },
        { id: "em2-3", text: "Rarely", weight: 3 },
        { id: "em2-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em3",
      text: "I listen to others without interrupting",
      options: [
        { id: "em3-1", text: "Always", weight: 4 },
        { id: "em3-2", text: "Sometimes", weight: 3 },
        { id: "em3-3", text: "Rarely", weight: 2 },
        { id: "em3-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em4",
      text: "I consider consequences before acting",
      options: [
        { id: "em4-1", text: "Always", weight: 4 },
        { id: "em4-2", text: "Sometimes", weight: 3 },
        { id: "em4-3", text: "Rarely", weight: 2 },
        { id: "em4-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em5",
      text: "I apologize when I make mistakes",
      options: [
        { id: "em5-1", text: "Always", weight: 4 },
        { id: "em5-2", text: "Sometimes", weight: 3 },
        { id: "em5-3", text: "Rarely", weight: 2 },
        { id: "em5-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em6",
      text: "I maintain composure during difficulties",
      options: [
        { id: "em6-1", text: "Always", weight: 1 },
        { id: "em6-2", text: "Sometimes", weight: 2 },
        { id: "em6-3", text: "Rarely", weight: 3 },
        { id: "em6-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em7",
      text: "I respect other peoples opinions",
      options: [
        { id: "em7-1", text: "Always", weight: 4 },
        { id: "em7-2", text: "Sometimes", weight: 3 },
        { id: "em7-3", text: "Rarely", weight: 2 },
        { id: "em7-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em8",
      text: "I think before I speak",
      options: [
        { id: "em8-1", text: "Always", weight: 4 },
        { id: "em8-2", text: "Sometimes", weight: 3 },
        { id: "em8-3", text: "Rarely", weight: 2 },
        { id: "em8-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em9",
      text: "I accept feedback constructively",
      options: [
        { id: "em9-1", text: "Always", weight: 1 },
        { id: "em9-2", text: "Sometimes", weight: 2 },
        { id: "em9-3", text: "Rarely", weight: 3 },
        { id: "em9-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em10",
      text: "I handle disagreements respectfully",
      options: [
        { id: "em10-1", text: "Always", weight: 1 },
        { id: "em10-2", text: "Sometimes", weight: 2 },
        { id: "em10-3", text: "Rarely", weight: 3 },
        { id: "em10-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em11",
      text: "I delay immediate gratification for long-term benefits",
      options: [
        { id: "em11-1", text: "Always", weight: 4 },
        { id: "em11-2", text: "Sometimes", weight: 3 },
        { id: "em11-3", text: "Rarely", weight: 2 },
        { id: "em11-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em12",
      text: "I support others without expecting recognition",
      options: [
        { id: "em12-1", text: "Always", weight: 4 },
        { id: "em12-2", text: "Sometimes", weight: 3 },
        { id: "em12-3", text: "Rarely", weight: 2 },
        { id: "em12-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em13",
      text: "I forgive others when appropriate",
      options: [
        { id: "em13-1", text: "Always", weight: 1 },
        { id: "em13-2", text: "Sometimes", weight: 2 },
        { id: "em13-3", text: "Rarely", weight: 3 },
        { id: "em13-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em14",
      text: "I acknowledge my limitations",
      options: [
        { id: "em14-1", text: "Always", weight: 4 },
        { id: "em14-2", text: "Sometimes", weight: 3 },
        { id: "em14-3", text: "Rarely", weight: 2 },
        { id: "em14-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em15",
      text: "I treat others with kindness and respect",
      options: [
        { id: "em15-1", text: "Always", weight: 1 },
        { id: "em15-2", text: "Sometimes", weight: 2 },
        { id: "em15-3", text: "Rarely", weight: 3 },
        { id: "em15-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em16",
      text: "I follow through on my commitments",
      options: [
        { id: "em16-1", text: "Always", weight: 1 },
        { id: "em16-2", text: "Sometimes", weight: 2 },
        { id: "em16-3", text: "Rarely", weight: 3 },
        { id: "em16-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em17",
      text: "I communicate my needs clearly",
      options: [
        { id: "em17-1", text: "Always", weight: 4 },
        { id: "em17-2", text: "Sometimes", weight: 3 },
        { id: "em17-3", text: "Rarely", weight: 2 },
        { id: "em17-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em18",
      text: "I take care of my physical and mental health",
      options: [
        { id: "em18-1", text: "Always", weight: 4 },
        { id: "em18-2", text: "Sometimes", weight: 3 },
        { id: "em18-3", text: "Rarely", weight: 2 },
        { id: "em18-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em19",
      text: "I make decisions based on values not impulses",
      options: [
        { id: "em19-1", text: "Always", weight: 1 },
        { id: "em19-2", text: "Sometimes", weight: 2 },
        { id: "em19-3", text: "Rarely", weight: 3 },
        { id: "em19-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em20",
      text: "I handle criticism without becoming defensive",
      options: [
        { id: "em20-1", text: "Always", weight: 1 },
        { id: "em20-2", text: "Sometimes", weight: 2 },
        { id: "em20-3", text: "Rarely", weight: 3 },
        { id: "em20-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em21",
      text: "I show gratitude regularly",
      options: [
        { id: "em21-1", text: "Always", weight: 1 },
        { id: "em21-2", text: "Sometimes", weight: 2 },
        { id: "em21-3", text: "Rarely", weight: 3 },
        { id: "em21-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em22",
      text: "I contribute positively to group dynamics",
      options: [
        { id: "em22-1", text: "Always", weight: 4 },
        { id: "em22-2", text: "Sometimes", weight: 3 },
        { id: "em22-3", text: "Rarely", weight: 2 },
        { id: "em22-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em23",
      text: "I practice empathy in interactions",
      options: [
        { id: "em23-1", text: "Always", weight: 1 },
        { id: "em23-2", text: "Sometimes", weight: 2 },
        { id: "em23-3", text: "Rarely", weight: 3 },
        { id: "em23-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em24",
      text: "I take initiative in solving problems",
      options: [
        { id: "em24-1", text: "Always", weight: 4 },
        { id: "em24-2", text: "Sometimes", weight: 3 },
        { id: "em24-3", text: "Rarely", weight: 2 },
        { id: "em24-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em25",
      text: "I maintain integrity in all situations",
      options: [
        { id: "em25-1", text: "Always", weight: 4 },
        { id: "em25-2", text: "Sometimes", weight: 3 },
        { id: "em25-3", text: "Rarely", weight: 2 },
        { id: "em25-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em26",
      text: "I ask for help when needed",
      options: [
        { id: "em26-1", text: "Always", weight: 4 },
        { id: "em26-2", text: "Sometimes", weight: 3 },
        { id: "em26-3", text: "Rarely", weight: 2 },
        { id: "em26-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em27",
      text: "I celebrate others success without jealousy",
      options: [
        { id: "em27-1", text: "Always", weight: 1 },
        { id: "em27-2", text: "Sometimes", weight: 2 },
        { id: "em27-3", text: "Rarely", weight: 3 },
        { id: "em27-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em28",
      text: "I set healthy boundaries in relationships",
      options: [
        { id: "em28-1", text: "Always", weight: 4 },
        { id: "em28-2", text: "Sometimes", weight: 3 },
        { id: "em28-3", text: "Rarely", weight: 2 },
        { id: "em28-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em29",
      text: "I reflect on my behavior and growth",
      options: [
        { id: "em29-1", text: "Always", weight: 1 },
        { id: "em29-2", text: "Sometimes", weight: 2 },
        { id: "em29-3", text: "Rarely", weight: 3 },
        { id: "em29-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em30",
      text: "I handle stress in healthy ways",
      options: [
        { id: "em30-1", text: "Always", weight: 1 },
        { id: "em30-2", text: "Sometimes", weight: 2 },
        { id: "em30-3", text: "Rarely", weight: 3 },
        { id: "em30-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em31",
      text: "I inspire others through my actions",
      options: [
        { id: "em31-1", text: "Always", weight: 1 },
        { id: "em31-2", text: "Sometimes", weight: 2 },
        { id: "em31-3", text: "Rarely", weight: 3 },
        { id: "em31-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em32",
      text: "I adapt to change positively",
      options: [
        { id: "em32-1", text: "Always", weight: 4 },
        { id: "em32-2", text: "Sometimes", weight: 3 },
        { id: "em32-3", text: "Rarely", weight: 2 },
        { id: "em32-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em33",
      text: "I pursue personal growth actively",
      options: [
        { id: "em33-1", text: "Always", weight: 4 },
        { id: "em33-2", text: "Sometimes", weight: 3 },
        { id: "em33-3", text: "Rarely", weight: 2 },
        { id: "em33-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em34",
      text: "I build meaningful relationships",
      options: [
        { id: "em34-1", text: "Always", weight: 4 },
        { id: "em34-2", text: "Sometimes", weight: 3 },
        { id: "em34-3", text: "Rarely", weight: 2 },
        { id: "em34-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em35",
      text: "I am mindful of others feelings",
      options: [
        { id: "em35-1", text: "Always", weight: 4 },
        { id: "em35-2", text: "Sometimes", weight: 3 },
        { id: "em35-3", text: "Rarely", weight: 2 },
        { id: "em35-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em36",
      text: "I avoid being judgmental",
      options: [
        { id: "em36-1", text: "Always", weight: 1 },
        { id: "em36-2", text: "Sometimes", weight: 2 },
        { id: "em36-3", text: "Rarely", weight: 3 },
        { id: "em36-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em37",
      text: "I express emotions appropriately",
      options: [
        { id: "em37-1", text: "Always", weight: 4 },
        { id: "em37-2", text: "Sometimes", weight: 3 },
        { id: "em37-3", text: "Rarely", weight: 2 },
        { id: "em37-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em38",
      text: "I maintain optimism despite challenges",
      options: [
        { id: "em38-1", text: "Always", weight: 1 },
        { id: "em38-2", text: "Sometimes", weight: 2 },
        { id: "em38-3", text: "Rarely", weight: 3 },
        { id: "em38-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em39",
      text: "I accept differences in others",
      options: [
        { id: "em39-1", text: "Always", weight: 1 },
        { id: "em39-2", text: "Sometimes", weight: 2 },
        { id: "em39-3", text: "Rarely", weight: 3 },
        { id: "em39-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em40",
      text: "I learn from failures",
      options: [
        { id: "em40-1", text: "Always", weight: 4 },
        { id: "em40-2", text: "Sometimes", weight: 3 },
        { id: "em40-3", text: "Rarely", weight: 2 },
        { id: "em40-4", text: "Never", weight: 1 },
      ],
    },
    {
      id: "em41",
      text: "I balance work and personal life",
      options: [
        { id: "em41-1", text: "Always", weight: 1 },
        { id: "em41-2", text: "Sometimes", weight: 2 },
        { id: "em41-3", text: "Rarely", weight: 3 },
        { id: "em41-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em42",
      text: "I speak truth with compassion",
      options: [
        { id: "em42-1", text: "Always", weight: 1 },
        { id: "em42-2", text: "Sometimes", weight: 2 },
        { id: "em42-3", text: "Rarely", weight: 3 },
        { id: "em42-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em43",
      text: "I value long-term relationships over conflicts",
      options: [
        { id: "em43-1", text: "Always", weight: 1 },
        { id: "em43-2", text: "Sometimes", weight: 2 },
        { id: "em43-3", text: "Rarely", weight: 3 },
        { id: "em43-4", text: "Never", weight: 4 },
      ],
    },
    {
      id: "em44",
      text: "I am content with who I am",
      options: [
        { id: "em44-1", text: "Always", weight: 1 },
        { id: "em44-2", text: "Sometimes", weight: 2 },
        { id: "em44-3", text: "Rarely", weight: 3 },
        { id: "em44-4", text: "Never", weight: 4 },
      ],
    },
  ]
  
  interface Option {
    id: string
    text: string
    weight: number
  }
  
  interface Question {
    id: string
    text: string
    options: Option[]
  }
  
  interface Answers {
    [key: string]: string
  }
  
  interface CalculatedScore {
    totalScore: number
    maxScore: number
    testType: "intelligence" | "maturity"
  }
  
  export function getQuestions(testType: "intelligence" | "maturity"): Question[] {
    return testType === "intelligence" ? emotionalIntelligenceQuestions : emotionalMaturityQuestions
  }
  
  export function calculateScores(testType: "intelligence" | "maturity", answers: Answers): CalculatedScore {
    const questions = getQuestions(testType)
    let totalScore = 0
    let maxScore = 0
  
    questions.forEach((question: Question): void => {
      const selectedOptionId = answers[question.id]
      const selectedOption = question.options.find((opt: Option): boolean => opt.id === selectedOptionId)
  
      if (selectedOption) {
        totalScore += selectedOption.weight
      }
      maxScore += Math.max(...question.options.map((opt: Option): number => opt.weight))
    })
  
    return {
      totalScore,
      maxScore,
      testType,
    }
  }
